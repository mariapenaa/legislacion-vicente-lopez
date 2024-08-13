'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { Pathway_Gothic_One } from 'next/font/google';

interface BreadcrumbProps {
    lastItem?: string;
    secondItemRoute?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ lastItem, secondItemRoute }) => {
    const paths = usePathname();
    let pathNames = paths?.split('/').filter(path => path);
    pathNames = pathNames === undefined ? [] : pathNames

    if (lastItem && pathNames.length > 0) {
        pathNames[pathNames.length - 1] = lastItem;
    }

    return (
        <div>
            <ul className="flex">
                {pathNames?.map((link, index) => {
                    let href = index === 1 && secondItemRoute ? secondItemRoute : `/${pathNames.slice(0, index + 1).join('/')}`;
                    let itemClasses = paths === href ? 'font-bold text-gray-900' : 'text-gray-600';
                    let itemLink = link[0].toUpperCase() + link.slice(1);
                    return (
                        <React.Fragment key={index}>
                            <li className={`${itemClasses} font-poppins text-base`}>
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            <span className="mx-2 text-gray-600">{pathNames.length !== index + 1 && '/'}</span>
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default Breadcrumb;
