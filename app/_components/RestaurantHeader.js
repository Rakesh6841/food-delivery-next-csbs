"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

const RestaurantHeader = () => {
    const [details, setDetails] = useState();
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        let data = localStorage.getItem("restaurantUser");
        if (!data && pathName == "/restaurant/dashboard") {
            router.push("/restaurant");
        } else if (data && pathName == "/restaurant") {
            router.push("/restaurant/dashboard");
        }
        else {
            setDetails(JSON.parse(data));
        }
    })

    const logout = () => {
        localStorage.removeItem("restaurantUser");
    }

    return (
        <div className="header-wrapper">
            <div className="logo">
                <img style={{ width: 100 }} src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png" alt="app-logo" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {
                    details && details.name ?
                        <>
                            <li><button onClick={logout}>Logout</button></li>
                            <li><Link href="/">Profile</Link></li>
                        </>
                        :
                        <li>
                            <Link href="/">Login/Signup</Link>
                        </li>
                }
            </ul>
        </div>
    )
}

export default RestaurantHeader