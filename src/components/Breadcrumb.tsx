'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { Pathway_Gothic_One } from 'next/font/google';

interface BreadcrumbProps {
    items: BreadCrumbItem[]
    lastItem?: string;
    secondItemRoute?: string;
}

export interface BreadCrumbItem {
    href: string,
    name: string,
    bold: boolean,
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {

    return (
        <div>
            <ul className="flex flex-wrap">
                {items?.map((item, index) => {
                    let itemClasses = item.bold ? 'font-bold text-gray-900' : 'text-gray-600';
                    return (
                        <React.Fragment key={index}>
                            <li className={`${itemClasses} font-poppins text-base`}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                            <span className="mx-2 text-gray-600">{items.length !== index + 1 && '/'}</span>
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default Breadcrumb;
