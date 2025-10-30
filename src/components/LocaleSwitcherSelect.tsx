'use client';
import { useState, useRef, useEffect } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { IoChevronDown } from 'react-icons/io5';
import { HiGlobeAlt } from 'react-icons/hi2';

type Props = {
  defaultValue: string;
  items: Array<{
    value: string;
    label: string;
    flag?: string;
    shortLabel?: string;
  }>;
};

export default function LocaleSwitcherSelect({ defaultValue, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    items.find((item) => item.value === defaultValue) || items[0],
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleSelect(item: (typeof items)[0]) {
    const locale = item.value as Locale;
    setSelectedItem(item);
    setUserLocale(locale);
    setIsOpen(false);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-[40px] items-center gap-2 rounded-full bg-skill-bg-color px-3 py-2 transition-all duration-300 hover:bg-icon-color/10 hover:shadow-lg dark:bg-dark-skill-bg-color dark:hover:bg-icon-color/20"
        aria-label="Change language"
      >
        {/* Globe Icon with Animation */}
        <HiGlobeAlt className="h-[18px] w-[18px] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />

        {/* Current Language Display */}
        <div className="flex items-center gap-1">
          {selectedItem.flag && (
            <span className="text-sm transition-transform duration-300 group-hover:scale-110">
              {selectedItem.flag}
            </span>
          )}
          <span className="text-sm font-medium text-primary-font-color dark:text-dark-primary-font-color">
            {selectedItem.shortLabel || selectedItem.value.toUpperCase()}
          </span>
        </div>

        {/* Chevron Icon */}
        <IoChevronDown
          className={`h-3 w-3 text-icon-color transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-12 z-50 min-w-[120px] overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-dark-secondary-bg-color dark:ring-white/10">
          <div className="py-1">
            {items.map((item) => {
              const isSelected = item.value === selectedItem.value;

              return (
                <button
                  key={item.value}
                  onClick={() => handleSelect(item)}
                  className={`group flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-all duration-200 ${
                    isSelected
                      ? 'bg-icon-color/10 text-icon-color dark:bg-icon-color/20'
                      : 'text-primary-font-color hover:bg-skill-bg-color dark:text-dark-primary-font-color dark:hover:bg-dark-skill-bg-color'
                  }`}
                >
                  {/* Flag */}
                  {item.flag && (
                    <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                      {item.flag}
                    </span>
                  )}

                  {/* Language Info */}
                  <div className="flex flex-col">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs opacity-60">
                      {item.shortLabel || item.value.toUpperCase()}
                    </span>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-icon-color" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
