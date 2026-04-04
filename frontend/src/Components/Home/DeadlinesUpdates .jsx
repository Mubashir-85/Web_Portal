import React, { useState, useEffect } from "react";
import { CalendarDays, FileCheck, BarChart3, Award } from "lucide-react";
import getDeadlines from "../Services/deadlines";

const DeadlinesUpdates = () => {
  const [deadlines, setDeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeadlines();
  }, []);

  const fetchDeadlines = async () => {
    try {
      const response = await getDeadlines();
      if (response.success) {
        setDeadlines(response.data);
      }
    } catch (error) {
      console.error("Error loading deadlines:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'urgent':
        return { bg: 'bg-red-50', text: 'text-red-600', border: 'bg-red-600' };
      case 'upcoming':
        return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'bg-blue-600' };
      case 'open':
        return { bg: 'bg-green-50', text: 'text-green-600', border: 'bg-green-600' };
      default:
        return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'bg-gray-600' };
    }
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'scholarship':
        return <Award className="h-5 w-5 text-[#0d2176]" />;
      case 'calendar':
        return <CalendarDays className="h-5 w-5 text-[#0d2176]" />;
      case 'file':
        return <FileCheck className="h-5 w-5 text-green-800" />;
      default:
        return <BarChart3 className="h-5 w-5 text-orange-800" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-slate-600">Loading deadlines...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="flex items-end justify-between border-b border-slate-900/10 pb-6">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#0d2176]">
              ANNOUNCEMENTS
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Deadlines & Updates
            </h2>
          </div>

          <a
            href="#"
            className="text-sm font-semibold text-[#0d2176] hover:underline"
          >
            View Archive →
          </a>
        </div>

        {/* CARDS */}
        {deadlines.length === 0 ? (
          <div className="mt-12 text-center">
            <p className="text-slate-600">No upcoming deadlines in the next 30 days.</p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {deadlines.map((deadline, index) => {
              const colors = getStatusColor(deadline.status);
              const isUrgent = deadline.status === 'urgent';

              return (
                <div
                  key={deadline.id}
                  className={`relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${
                    isUrgent ? 'border-2 border-red-200' : ''
                  }`}
                >
                  {isUrgent && (
                    <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-red-600" />
                  )}

                  <div className="flex items-center justify-between">
                    {isUrgent ? (
                      <span className={`rounded-md ${colors.bg} px-2 py-1 text-xs font-semibold ${colors.text}`}>
                        URGENT
                      </span>
                    ) : (
                      getIcon(deadline.icon)
                    )}
                    <span className="text-xs text-slate-900/50">
                      {deadline.daysLeft === 0 
                        ? 'Today' 
                        : deadline.daysLeft === 1 
                        ? '1 day left' 
                        : `${deadline.daysLeft} days left`}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900 line-clamp-2">
                    {deadline.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {deadline.subtitle}
                  </p>

                  <hr className="my-4 border-slate-900/10" />

                  {/* Date pinned to bottom */}
                  <p className="mt-auto pt-4 text-sm font-medium text-slate-900/60">
                    {formatDate(deadline.date)}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default DeadlinesUpdates;
