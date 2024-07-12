'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Breadcrumb = () => {

    const paths = usePathname()
    const pathNames = paths?.split('/').filter( path => path )
    return (
        <div>
            <ul className="flex">
                {/* <li><Link href={'/'}>{homeElement}</Link></li> */}
            {
                    pathNames?.map( (link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemClasses = paths === href ? 'font-bold text-gray-900' : 'text-gray-600';
                        let itemLink = link[0].toUpperCase() + link.slice(1, link.length)
                        return (
                            <React.Fragment key={index}>
                                <li className={`${itemClasses} font-poppins text-base`}>
                                    <Link href={href}>{itemLink}</Link>
                                </li>
                                <span className="mx-2 text-gray-600">{pathNames.length !== index + 1 && '/'}</span>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Breadcrumb
