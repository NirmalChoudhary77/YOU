import { useAuth } from '../context/AuthContext';
import React, { useState } from "react";
import { useEffect, useCallback } from "react";
import { supabase } from '../lib/supabase.js';
import { useUser } from '@supabase/auth-helpers-react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

const glass = "bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl rounded-2xl";

const Planner = () => {
  const { user } = useAuth();
  // Mock completed dates for habit tracking
  const [completedDates, setCompletedDates] = useState([]);

  // Fetch completed dates from Supabase on load
  const fetchCompletedDates = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('planner')
      .select('date')
      .eq('user_id', user.id);
    if (error) {
      console.error(error);
    } else {
      // Normalize all dates to YYYY-MM-DD
      const normalized = data
        ? data.map(entry => {
            if (!entry.date) return null;
            // If already YYYY-MM-DD, return as is
            if (/^\d{4}-\d{2}-\d{2}$/.test(entry.date)) return entry.date;
            // Otherwise, try to parse and format
            const d = new Date(entry.date);
            if (isNaN(d)) return null;
            return d.toISOString().split('T')[0];
          }).filter(Boolean)
        : [];
      setCompletedDates(normalized);
    }
  }, [user]);

  useEffect(() => {
    fetchCompletedDates();
  }, [fetchCompletedDates]);
  // Save completed routine to Supabase
  const handleComplete = async (date, routineName) => {
    if (!user) return;
    // Always save date as YYYY-MM-DD string
    const dateString = typeof date === 'string' ? date : new Date(date).toISOString().split('T')[0];
    const { data, error } = await supabase
      .from('planner')
      .insert([
        {
          user_id: user.id,
          date: dateString,
          routine_name: routineName || null,
        },
      ]);
    if (error) console.error(error);
    else {
      console.log('Saved!', data);
      fetchCompletedDates(); // Refresh after save
    }
  };
  const [activeTab, setActiveTab] = useState("morning");
  const [morningRoutine, setMorningRoutine] = useState([
    { name: "Cleanser", done: false },
    { name: "Toner", done: false },
    { name: "Moisturizer", done: false },
    { name: "Sunscreen", done: false },
  ]);
  const [nightRoutine, setNightRoutine] = useState([
    { name: "Makeup Remover", done: false },
    { name: "Cleanser", done: false },
    { name: "Serum", done: false },
    { name: "Moisturizer", done: false },
  ]);
  const [newItem, setNewItem] = useState("");
  const [date, setDate] = useState(new Date()); // This is correct, keeps the selected date
  const [note, setNote] = useState("");
  const [image, setImage] = useState(null);

  const routine = activeTab === "morning" ? morningRoutine : nightRoutine;
  const setRoutine = activeTab === "morning" ? setMorningRoutine : setNightRoutine;

  const toggleItem = (index) => {
    const updated = [...routine];
    updated[index].done = !updated[index].done;
    setRoutine(updated);
  };

  const addItem = () => {
    if (newItem.trim()) {
      setRoutine([...routine, { name: newItem, done: false }]);
      setNewItem("");
    }
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Please log in to use the planner.</div>;
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-white to-purple-100 text-black dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 dark:text-white overflow-x-hidden">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-6 mx-auto w-full px-2 sm:px-0 max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        💖 Skincare Planner
      </motion.h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 mx-auto w-full px-2 max-w-2xl">
        {["morning", "night"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full transition-all text-lg font-medium ${
              activeTab === tab
                ? "bg-pink-500 text-white shadow-lg"
                : "bg-white/60 text-gray-700 hover:bg-white"
            }`}
          >
            {tab === "morning" ? "🌞 Morning" : "🌙 Night"}
          </button>
        ))}
      </div>

      {/* Routine Card */}
      <motion.div
        className={`p-4 sm:p-6 mb-8 ${glass} mx-auto w-full max-w-2xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-pink-800">
          {activeTab === "morning" ? "Your Morning Rituals" : "Your Night Rituals"}
        </h2>

        <ul className="space-y-2">
          {routine.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggleItem(i)}
                className="accent-pink-500"
              />
              <span className={item.done ? "line-through text-gray-400" : "text-gray-800"}>
                {item.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Add new item */}
        <div className="flex gap-3 mt-5">
          <Input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add custom step..."
            className="bg-white dark:bg-zinc-900 text-black dark:text-white"
          />
          <Button onClick={addItem} className="bg-pink-500 hover:bg-pink-600 text-white">
            Add
          </Button>
        </div>
      </motion.div>

      {/* Calendar + Progress Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-full px-2 max-w-4xl">
        {/* Calendar Card */}
        <motion.div
          className={`p-4 sm:p-6 ${glass} w-full max-w-full`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-xl font-semibold text-purple-700 mb-2">📅 Routine Calendar</h2>
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={({ date: tileDate, view }) => {
              const dateString = tileDate.toISOString().split("T")[0];
              if (view === "month" && completedDates.includes(dateString)) {
                return <div className="habit-dot pointer-events-none" style={{ zIndex: 2 }} />;
              }
              return null;
            }}
            tileClassName={({ date: tileDate, view }) => {
              if (view === 'month') {
                const today = new Date();
                if (
                  tileDate.getDate() === today.getDate() &&
                  tileDate.getMonth() === today.getMonth() &&
                  tileDate.getFullYear() === today.getFullYear()
                ) {
                  return 'calendar-today';
                }
                // Highlight completed days
                const dateString = tileDate.toISOString().split("T")[0];
                if (completedDates.includes(dateString)) {
                  return 'completed-day';
                }
              }
              return null;
            }}
            className="rounded-xl"
          />
          <p className="text-sm mt-2 text-gray-600">
            Selected: <strong>{date.toDateString()}</strong>
          </p>
        </motion.div>

        {/* Progress Log */}
        <motion.div
          className={`p-4 sm:p-6 ${glass} w-full max-w-full`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-xl font-semibold text-purple-700 mb-4">📷 Weekly Progress</h2>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            className="bg-white dark:bg-zinc-900 text-black dark:text-white"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-4 w-full max-h-48 object-cover rounded-xl shadow"
            />
          )}
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="How's your skin feeling?"
            className="mt-4 bg-white dark:bg-zinc-900 text-black dark:text-white"
          />
          <Button className="mt-3 bg-purple-500 hover:bg-purple-600 text-white w-full" onClick={() => handleComplete(date.toISOString().split('T')[0], 'Routine Completed')}>
            Save Progress
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Planner;
