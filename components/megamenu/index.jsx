'use client'

import React, { useState } from 'react';

const MultiTabMegaMenu = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold">Logo</a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <div className="relative">
                <button onMouseOut={() => setActiveTab('')}
                  onMouseEnter={() => setActiveTab('tab1')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none ${activeTab === 'tab1' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  tabindex="0"
                >
                  Tab 1
                </button>
                <button onMouseOut={() => setActiveTab('')}
                  onMouseEnter={() => setActiveTab('tab2')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none ${activeTab === 'tab2' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  tabindex="0"
                >
                  Tab 2
                </button>
                <button onMouseOut={() => setActiveTab('')}
                  onMouseEnter={() => setActiveTab('tab3')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none ${activeTab === 'tab3' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  tabindex="0"
                >
                  Tab 3
                </button>
                <div className="absolute left-0 z-10 mt-2 w-screen max-w-md">
                  {activeTab === 'tab1' && (
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a href="#" className="block p-3 rounded-md hover:bg-gray-50" tabindex="0">
                          <p className="text-base font-medium text-gray-900">Item 1</p>
                          <p className="mt-1 text-sm text-gray-500">Description for item 1</p>
                        </a>
                        <a href="#" className="block p-3 rounded-md hover:bg-gray-50" tabindex="0">
                          <p className="text-base font-medium text-gray-900">Item 2</p>
                          <p className="mt-1 text-sm text-gray-500">Description for item 2</p>
                        </a>
                      </div>
                    </div>
                  )}
                  {activeTab === 'tab2' && (
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a href="#" className="block p-3 rounded-md hover:bg-gray-50" tabindex="0">
                          <p className="text-base font-medium text-gray-900">Item 3</p>
                          <p className="mt-1 text-sm text-gray-500">Description for item 3</p>
                        </a>
                        <a href="#" className="block p-3 rounded-md hover:bg-gray-50" tabindex="0">
                          <p className="text-base font-medium text-gray-900">Item 4</p>
                          <p className="mt-1 text-sm text-gray-500">Description for item 4</p>
                        </a>
                      </div>
                    </div>
                  )}
                  {activeTab === 'tab3' && (
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a href="#" className="block p-3 rounded-md hover:bg-gray-50" tabindex="0">
                          <p className="text-base font-medium text-gray-900">Item 5</p>
                          <p className="mt-1 text-sm text-gray-500">Description for item 5</p>
                        </a>
                        <a href="#" className="block p-3 rounded-md hover:bg-gray-50" tabindex="0">
                          <p className="text-base font-medium text-gray-900">Item 6</p>
                          <p className="mt-1 text-sm text-gray-500">Description for item 6</p>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MultiTabMegaMenu;



