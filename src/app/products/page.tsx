import React, { useState } from 'react';
import { Calendar, Video, Phone, MessageSquare, Star, ChevronLeft, ChevronRight, Check, Clock } from 'lucide-react';

export default function AppointmentBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [consultationType, setConsultationType] = useState('video');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialization: 'General Practitioner',
      gmcNumber: 'GMC-7654321',
      experience: 12,
      rating: 4.9,
      reviews: 234,
      consultationFee: 39.99,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      nextAvailable: 'Today at 2:00 PM'
    },
    {
      id: 2,
      name: 'Dr. James Anderson',
      specialization: 'General Practitioner',
      gmcNumber: 'GMC-8765432',
      experience: 8,
      rating: 4.8,
      reviews: 189,
      consultationFee: 35.99,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
      availability: ['Mon', 'Wed', 'Fri', 'Sat'],
      nextAvailable: 'Tomorrow at 10:00 AM'
    },
    {
      id: 3,
      name: 'Dr. Emily Roberts',
      specialization: 'Mental Health Specialist',
      gmcNumber: 'GMC-9876543',
      experience: 15,
      rating: 5.0,
      reviews: 312,
      consultationFee: 49.99,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
      availability: ['Tue', 'Wed', 'Thu', 'Fri'],
      nextAvailable: 'Today at 4:30 PM'
    },
    {
      id: 4,
      name: 'Dr. Michael Chen',
      specialization: 'Pediatrician',
      gmcNumber: 'GMC-6543210',
      experience: 10,
      rating: 4.9,
      reviews: 267,
      consultationFee: 42.99,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
      availability: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
      nextAvailable: 'Tomorrow at 9:30 AM'
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM'
  ];

  const consultationTypes = [
    {
      id: 'video',
      icon: Video,
      title: 'Video Call',
      description: 'Face-to-face consultation via secure video',
      duration: '30 mins'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone Call',
      description: 'Consultation over the phone',
      duration: '20 mins'
    },
    {
      id: 'chat',
      icon: MessageSquare,
      title: 'Secure Chat',
      description: 'Text-based consultation',
      duration: '15 mins'
    }
  ];

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">HealthPharm</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book a Consultation</h1>
          <p className="text-gray-600">Speak with a registered GP from the comfort of your home</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctors List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Doctors</h2>

              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor)}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      selectedDoctor?.id === doctor.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex gap-4">
                      {/* Doctor Image */}
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>

                      {/* Doctor Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                            <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                          </div>
                          {selectedDoctor?.id === doctor.id && (
                            <div className="bg-blue-600 text-white p-1 rounded-full">
                              <Check className="w-4 h-4" />
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-medium">{doctor.rating}</span>
                            <span>({doctor.reviews} reviews)</span>
                          </div>
                          <span>•</span>
                          <span>{doctor.experience} years experience</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Next Available:</p>
                            <p className="font-semibold text-green-600">{doctor.nextAvailable}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">£{doctor.consultationFee}</p>
                            <p className="text-sm text-gray-500">per consultation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Type Selection */}
            {selectedDoctor && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Consultation Type</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {consultationTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => setConsultationType(type.id)}
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all text-center ${
                        consultationType === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <type.icon className={`w-8 h-8 mx-auto mb-3 ${
                        consultationType === type.id ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <h3 className="font-bold text-gray-900 mb-1">{type.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{type.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Calendar */}
            {selectedDoctor && consultationType && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>

                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {currentMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={prevMonth}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextMonth}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                  {generateCalendarDays().map((day, idx) => (
                    <button
                      key={idx}
                      disabled={!day || day < new Date()}
                      onClick={() => day && setSelectedDate(day)}
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                        !day
                          ? 'invisible'
                          : day < new Date()
                          ? 'text-gray-300 cursor-not-allowed'
                          : selectedDate?.getTime() === day.getTime()
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-blue-50 text-gray-700'
                      }`}
                    >
                      {day?.getDate()}
                    </button>
                  ))}
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Available Time Slots</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h2>

              {!selectedDoctor ? (
                <p className="text-gray-500 text-center py-8">Select a doctor to continue</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {/* Doctor */}
                    <div className="pb-4 border-b">
                      <p className="text-sm text-gray-600 mb-1">Doctor</p>
                      <p className="font-semibold text-gray-900">{selectedDoctor.name}</p>
                      <p className="text-sm text-blue-600">{selectedDoctor.specialization}</p>
                    </div>

                    {/* Consultation Type */}
                    {consultationType && (
                      <div className="pb-4 border-b">
                        <p className="text-sm text-gray-600 mb-1">Consultation Type</p>
                        <p className="font-semibold text-gray-900 capitalize">{consultationType} Call</p>
                      </div>
                    )}

                    {/* Date & Time */}
                    {selectedDate && selectedTime && (
                      <div className="pb-4 border-b">
                        <p className="text-sm text-gray-600 mb-1">Date & Time</p>
                        <p className="font-semibold text-gray-900">
                          {selectedDate.toLocaleDateString('en-GB', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                        <p className="text-sm text-gray-700">{selectedTime}</p>
                      </div>
                    )}

                    {/* Fee */}
                    <div className="pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Total</span>
                        <span className="text-3xl font-bold text-gray-900">
                          £{selectedDoctor.consultationFee}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                      selectedDate && selectedTime
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Confirm Booking
                  </button>

                  <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>GMC registered doctors</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Secure and confidential</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Prescription service available</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Free cancellation up to 2 hours before</span>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}