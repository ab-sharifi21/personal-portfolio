'use client';
import { useState } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { IoLanguage } from 'react-icons/io5';

type Props = {
    defaultValue: string;
    items: Array<{ value: string; label: string }>;
};

export default function LocaleSwitcherSelect({
    defaultValue,
    items,
}: Props) {
    function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        const locale = value as Locale;

        setUserLocale(locale);
    }

    return (
        <div className="group relative">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-skill-bg-color dark:bg-dark-skill-bg-color">
                <IoLanguage className="h-[20px] w-[20px] duration-500 group-hover:rotate-360 group-hover:scale-125" />
            </div>
            <select
                defaultValue={defaultValue}
                onChange={onChange}
                className="absolute inset-0 cursor-pointer bg-skill-bg-color opacity-0 dark:bg-dark-skill-bg-color"
            >
                {items.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
