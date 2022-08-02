import React from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const pdata = [
  {
    name: "c",
    student: 13,
    fees: 15,
  },
  {
    name: "php",
    student: 12,
    fees: 18,
  },
  {
    name: "ruby",
    student: 29,
    fees: 5,
  },
  {
    name: "rails",
    student: 66,
    fees: 88,
  },
  {
    name: "oop",
    student: 10,
    fees: 99,
  },
  {
    name: "Dsa",
    student: 80,
    fees: 44,
  },
];

const newCartData = [
  {
    name: "April",
    date: 5,
    year: 2022,
  },

  {
    name: "jan",
    date: 9,
    year: 2022,
  },
];

const Dashboard = () => {
  return (
    <div className="app bg-slate-100">
      <div className="container mx-auto pt-5 pb-5">
      
        {/* card */}
        <div className="mt-3  p-3  rounded-xl mb-5 bg-white">
          <h3 className="text-orange-400 text-2xl mb-3 font-semibold ">
             Dashboard 
          </h3>

          <div class=" sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid grid-cols-1 gap-4 justify-center">
            <div className=" bg-white drop-shadow-md  flex justify-between py-2 px-4 rounded-lg ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 bg-purple-50 text-purple-400 p-2 rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-end text-gray-500 text-3xl font-semibold ">
                  36
                </h1>
                <p className="text-gray-500 font-semibold">
                  Total no of Patients
                </p>
              </div>
            </div>

            <div className="bg-white drop-shadow-md flex justify-between py-2 px-4 rounded-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 text-cyan-400 bg-cyan-50 p-2 rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-end text-3xl font-semibold text-gray-500">
                  22
                </h1>
                <p className="text-gray-500 font-semibold">
                  Total no of Staff
                </p>
              </div>
            </div>

            <div className="bg-white drop-shadow-md  flex justify-between py-2 px-4 rounded-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 bg-orange-50 text-orange-400 p-2 rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-end text-3xl text-gray-500 font-semibold">
                  18
                </h1>
                <p className="text-gray-500 font-semibold">
                  Unrendered Session
                </p>
              </div>
            </div>
            <div className="bg-white drop-shadow-md  flex justify-between py-2 px-4  rounded-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 bg-rose-100 text-rose-400 p-2 rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-end text-3xl font-semibold text-gray-500">
                  26
                </h1>
                <p className="text-gray-500 font-semibold">
                  Ubilled Clims
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-2 ">
            <div className=" h-72 rounded-b-lg border-1 border-slate-300 shadow-2xl">
              <p className="bg-gradient-to-r from-teal-600 to-teal-500 text-center text-slate-100">
                Total bills vs Total Paid
              </p>
              {/* <div className="container mx-2"> */}

              <ResponsiveContainer width="100%">
                <BarChart
                  data={newCartData}
                  height={200}
                  width={300}
                  margin={{ top: 20, right: 20, left: -17, bottom: 20 }}
                >
                  <CartesianGrid />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="year" barSize={60} fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className=" h-72 rounded-b-lg border-1 border-slate-300 shadow-2xl">
              <p className="bg-gradient-to-r from-teal-600 to-teal-500 text-center text-slate-100">
                Total bills vs Total Paid
              </p>

              <ResponsiveContainer width="100%">
                <LineChart
                  data={pdata}
                  height={200}
                  width={300}
                  margin={{ top: 20, right: 20, left: -17, bottom: 20 }}
                >
                  <CartesianGrid />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="student" stroke="red" />
                  <Line dataKey="fees" stroke="green" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="h-72 rounded-b-lg border-1 border-slate-300 shadow-2xl">
              <p className="bg-gradient-to-r from-teal-600 to-teal-500 text-center text-slate-100">
                Total bills vs Total Paid
              </p>

              <ResponsiveContainer width="100%">
                <BarChart
                  data={pdata}
                  height={200}
                  width={300}
                  margin={{ top: 20, right: 20, left: -17, bottom: 20 }}
                >
                  <CartesianGrid />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="student" barSize={30} fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-300 h-60 rounded-t-lg  border-1 border-slate-300 shadow-2xl ">
              <p className=" text-slate-200 rounded-t-lg border-1 border-slate-300 shadow-2xl ml-3">
                Todays Task
              </p>

              <div class="overflow-x-auto">
                <table class="table table-zebra table-compact w-full">
                  <thead>
                    <tr>
                      <th className="first:rounded-none"></th>
                      <th>Name</th>
                      <th className="last:rounded-none">Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Blue</td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>4</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th className="first:rounded-none">5</th>
                      <td>Brice Swyre</td>
                      <td className="last:rounded-none">Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-300  h-60 rounded-t-lg border-1 border-slate-300 shadow-2xl">
              <p className="text-slate-200 rounded-t-lg border-1 border-slate-300 shadow-2xl ml-3">
                Todays Task
              </p>
              <div class="overflow-x-auto">
                <table class="table table-zebra table-compact w-full">
                  <thead>
                    <tr>
                      <th className="first:rounded-none"></th>
                      <th>Name</th>
                      <th className="last:rounded-none">Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Blue</td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>4</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th className="first:rounded-none">5</th>
                      <td>Brice Swyre</td>
                      <td className="last:rounded-none">Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-300  h-60 rounded-t-lg border-1 border-slate-300 shadow-2xl">
              <p className="text-slate-200 rounded-t-lg border-1 border-slate-300 shadow-2xl ml-3">
                Todays Task
              </p>
              <div class="overflow-x-auto">
                <table class="table table-zebra table-compact w-full">
                  <thead>
                    <tr>
                      <th className="first:rounded-none"></th>
                      <th>Name</th>
                      <th className="last:rounded-none">Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Blue</td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>4</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th className="first:rounded-none">5</th>
                      <td>Brice Swyre</td>
                      <td className="last:rounded-none">Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-300  h-60 rounded-t-lg border-1 border-slate-300 shadow-2xl">
              <p className="text-slate-200 rounded-t-lg border-1 border-slate-300 shadow-2xl ml-3">
                Todays Task
              </p>
              <div class="overflow-x-auto">
                <table class="table table-zebra table-compact w-full">
                  <thead>
                    <tr>
                      <th className="first:rounded-none"></th>
                      <th>Name</th>
                      <th className="last:rounded-none">Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Blue</td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>4</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th className="first:rounded-none">5</th>
                      <td>Brice Swyre</td>
                      <td className="last:rounded-none">Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-300  h-60 rounded-t-lg border-1 border-slate-300 shadow-2xl">
              <p className="text-slate-200 rounded-t-lg border-1 border-slate-300 shadow-2xl ml-3">
                Todays Task
              </p>
              <div class="overflow-x-auto">
                <table class="table table-zebra table-compact w-full">
                  <thead>
                    <tr>
                      <th className="first:rounded-none"></th>
                      <th>Name</th>
                      <th className="last:rounded-none">Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Blue</td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>4</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th className="first:rounded-none">5</th>
                      <td>Brice Swyre</td>
                      <td className="last:rounded-none">Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-300  h-60 rounded-t-lg border-1 border-slate-300 shadow-2xl">
              <p className="text-slate-200 rounded-t-lg border-1 border-slate-300 shadow-2xl ml-3">
                Todays Task
              </p>
              <div class="overflow-x-auto">
                <table class="table table-zebra table-compact w-full">
                  <thead>
                    <tr>
                      <th className="first:rounded-none"></th>
                      <th>Name</th>
                      <th className="last:rounded-none">Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Blue</td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th>4</th>
                      <td>Hart Hagerty</td>
                      <td>Purple</td>
                    </tr>

                    <tr>
                      <th className="first:rounded-none">5</th>
                      <td>Brice Swyre</td>
                      <td className="last:rounded-none">Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* end container and main div */}
      </div>
    </div>
  );
};

export default Dashboard;
