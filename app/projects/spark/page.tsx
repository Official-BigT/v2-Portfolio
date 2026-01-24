import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spark Event Platform - Case Study | BigT Portfolio",
  description:
    "A React Native event networking platform connecting attendees, speakers, and sponsors through scheduled meetings, live updates, and QR-based ticketing.",
  openGraph: {
    title: "Spark Event Platform - Case Study",
    description:
      "A React Native event networking platform with meeting scheduling, QR ticketing, and real-time updates.",
    images: [
      {
        url: "https://res.cloudinary.com/dznd7vzlb/image/upload/v1769257222/Home_o7rgua.png",
        width: 400,
        height: 800,
        alt: "Spark Event Platform Home Screen",
      },
    ],
  },
};

export default function SparkCaseStudy() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Back Button */}
      <div className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-start gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-100">
              Spark Event Platform
            </h1>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full">
              Mobile App
            </span>
          </div>

          <p className="text-xl text-neutral-400 max-w-3xl mb-8">
            A React Native event networking platform connecting attendees,
            speakers, and sponsors through scheduled meetings, live updates, and
            QR-based ticketing.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Official-BigT/Spark"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              View Repository
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "React Native",
              "Expo",
              "TypeScript",
              "NativeWind",
              "React Navigation",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">
            Project Overview
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed">
              Spark is an internal company application designed to streamline
              event networking and coordination. The platform allows attendees
              to browse schedules, request meetings with sponsors or other
              participants, manage QR-based tickets, and stay updated with
              real-time notifications.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Built with React Native and Expo, Spark runs natively on iOS and
              Android, delivering a smooth, mobile-first experience optimized
              for conference and corporate event environments.
            </p>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">My Role</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-neutral-100">
              Frontend Engineer (Mobile)
            </strong>
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            I was responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>UI implementation across all mobile screens</li>
            <li>Mobile navigation architecture with React Navigation</li>
            <li>State management and data flow</li>
            <li>Backend API integration</li>
            <li>Responsive mobile layouts and touch interactions</li>
          </ul>
          <p className="text-neutral-400 text-sm mt-4">
            Note: I did not build the backend logic or server infrastructure.
          </p>
        </section>

        {/* What I Built */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-6">
            What I Built
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-3">
                Core Features Implemented
              </h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Event schedule browsing with filtering by stage and time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Attendee networking system with profile cards and connection
                    requests
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Meeting request flow (physical/virtual) with date, time, and
                    location selection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>QR code ticket scanner with transfer functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Company and speaker profile detail views</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Personal profile management system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Notification center for meeting requests and updates
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-3">
                UI/UX Components
              </h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Bottom sheet modal for attendee details using
                    @gorhom/bottom-sheet
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Custom tab navigation with active state indicators
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Swipeable card views with gesture handlers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>Loading states and skeleton screens</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-3">
                Technical Implementation
              </h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Stack and tab navigation using @react-navigation/native
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    Tailwind-style utility classes with NativeWind for
                    consistent design
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>QR code generation and scanning logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span>
                    API integration with mock data during early development
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-6">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-200 mb-3">
                Mobile Framework
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li>• React Native (0.81.5)</li>
                <li>• Expo SDK (54)</li>
                <li>• TypeScript (5.9.2)</li>
                <li>• React (19.1.0)</li>
              </ul>
            </div>

            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-200 mb-3">
                Navigation & Routing
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li>• @react-navigation/native</li>
                <li>• @react-navigation/native-stack</li>
                <li>• react-native-screens</li>
                <li>• react-native-safe-area-context</li>
              </ul>
            </div>

            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-200 mb-3">
                Styling & Design
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li>• NativeWind (Tailwind for React Native)</li>
                <li>• Tailwind CSS</li>
                <li>• react-native-svg</li>
                <li>• expo-linear-gradient</li>
              </ul>
            </div>

            <div className="border border-neutral-800 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-200 mb-3">
                Animations & Gestures
              </h3>
              <ul className="space-y-2 text-neutral-400">
                <li>• react-native-reanimated</li>
                <li>• react-native-gesture-handler</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Screens Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-6">Screens</h2>
          <p className="text-neutral-400 mb-8">
            These Figma design frames represent screens I personally implemented
            in the mobile app.
          </p>

          <div className="space-y-12">
            {/* Home Screen */}
            <div className="border border-neutral-800 rounded-lg overflow-hidden">
              <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                <h3 className="text-lg font-semibold text-neutral-100">
                  Home Screen
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Main dashboard with event overview and quick access to key
                  features
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 flex justify-center">
                <div className="relative w-full max-w-[300px] h-[600px]">
                  <Image
                    src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769257222/Home_o7rgua.png"
                    alt="Home Screen"
                    fill
                    className="rounded-lg shadow-xl object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Schedule Screens */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">
                Event Schedule Browsing
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Schedule Main
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Filterable schedule view with stage and time selection
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256897/Schedule_main_qq12pn.png"
                        alt="Schedule Main"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Schedule Detail
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Detailed event view with speaker info and session details
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256895/Schedule_-_View_pr5jyh.png"
                        alt="Schedule Detail"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendee Networking */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">
                Attendee Networking System
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Card View
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Swipeable attendee profile cards for quick browsing
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256898/Attendees_-_Card_View_douuc6.png"
                        alt="Attendees Card View"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      List View
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Compact list layout with key attendee information
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256902/Attendees_-_List_View_rdaano.png"
                        alt="Attendees List View"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Detail View
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Bottom sheet modal with full profile and action buttons
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256899/Attendees_-_Detail_View_bottom_sheet_eggy8t.png"
                        alt="Attendee Detail"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meeting Request Flow */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">
                Meeting Request Flow
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      All Meetings
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Overview of scheduled, pending, and past meetings
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256919/Meetings-_all_yrmlqi.png"
                        alt="All Meetings"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Request Meeting
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Form for requesting physical or virtual meetings with date
                      and location
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256914/Meetings_-_Request_Meeting_Physical_Virtual_c5d7uz.png"
                        alt="Request Meeting"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Inbound Request
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Modal for accepting or declining meeting requests
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256922/Meetings-_inbound_request_modal_bwuiax.png"
                        alt="Meeting Request Modal"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Scheduled Meeting
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      View confirmed meeting details with edit and cancel options
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256919/Meetings_-_View_Scheduled_tcdooc.png"
                        alt="Scheduled Meeting"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Ticket System */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">
                QR Code Ticket System
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      My Ticket
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      QR code display for event check-in and verification
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256929/My_Ticket_k6ijti.png"
                        alt="My Ticket"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Scan Ticket
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Camera integration for scanning attendee QR codes
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256891/Scan_QR_Code_-_Scan_Ticket_jgitf3.png"
                        alt="Scan Ticket"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Scanned Result
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Validation result and attendee information post-scan
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256894/Scan_QR_Code_-_Scanned_Ticket_le8y8o.png"
                        alt="Scanned Ticket"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">
                Profile Detail Views
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Company Profile
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Sponsor company details with team members and contact info
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256904/Home_-_View_Company_x2xovf.png"
                        alt="Company Profile"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Speaker Profile
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Speaker bio, session list, and meeting request option
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256906/Home_-_View_Speaker_ektuin.png"
                        alt="Speaker Profile"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Profile Management */}
            <div className="border border-neutral-800 rounded-lg overflow-hidden">
              <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                <h3 className="text-lg font-semibold text-neutral-100">
                  Personal Profile Management
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Editable user profile with bio, company info, and social links
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 flex justify-center">
                <div className="relative w-full max-w-[300px] h-[600px]">
                  <Image
                    src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256890/Personal_profile_management_ibawas.png"
                    alt="Personal Profile Management"
                    fill
                    className="rounded-lg shadow-xl object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">
                Notification Center
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Notifications List
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Real-time updates for meeting requests and event changes
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256890/Notifications_qeyler.png"
                        alt="Notifications"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-lg overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800">
                    <h4 className="font-semibold text-neutral-100">
                      Notification Detail
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Expanded view with full context and action options
                    </p>
                  </div>
                  <div className="p-6 bg-neutral-900/50 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[600px]">
                      <Image
                        src="https://res.cloudinary.com/dznd7vzlb/image/upload/v1769256931/Notifications_detail_juafj8.png"
                        alt="Notification Detail"
                        fill
                        className="rounded-lg shadow-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Integration */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">
            Architecture & Integration
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              The app uses React Navigation's stack and tab navigators for
              seamless screen transitions. NativeWind brings Tailwind's utility
              classes to React Native, enabling consistent styling across
              components. State management relies on React's built-in hooks and
              context for simple, maintainable data flow.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Backend integration uses REST APIs with mock data fallbacks during
              early development. The app handles authentication tokens, error
              states, and loading indicators to provide a smooth user
              experience.
            </p>
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">
            Challenges & Learnings
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">
                Cross-Platform Consistency
              </h3>
              <p className="text-neutral-400">
                Ensuring UI elements rendered consistently across iOS and
                Android required platform-specific adjustments, especially for
                navigation headers and safe area handling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">
                Navigation Architecture
              </h3>
              <p className="text-neutral-400">
                Structuring nested stack and tab navigators while maintaining
                clean state management taught me the importance of planning
                navigation flows early.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">
                Mobile Gestures
              </h3>
              <p className="text-neutral-400">
                Implementing swipe actions and bottom sheets required learning
                react-native-gesture-handler and understanding mobile touch
                interactions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">
                Performance Optimization
              </h3>
              <p className="text-neutral-400">
                Rendering large lists efficiently led me to implement
                FlatList/SectionList with proper key extraction and memoization.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">
            Next Steps
          </h2>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <span>Implement offline-first data caching with AsyncStorage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <span>Add push notifications using Expo Notifications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <span>Integrate calendar sync for scheduled meetings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <span>Enhance accessibility with screen reader support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">▹</span>
              <span>Add unit and integration tests with Jest/React Native Testing Library</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
