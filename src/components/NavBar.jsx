import React from 'react'

const NavBar = () => {
    return (
        <nav className='px-6 border border-gray-300 w-60 flex flex-col justify-between h-screen'>
            <div>
                <div className='py-8'>
                    <img className='h-20 ml-6' src="juno-logo.png" alt="logo" />
                </div>

                <div className='flex flex-col w-full gap-6'>
                    <a className='text-gray-600 font-medium w-full' href="/overview">
                        <div className='hover:bg-blue-600 hover:text-blue-600 hover:bg-opacity-40 w-[100%] px-3 py-1.5 rounded-md'>Overview</div>
                    </a>
                    <a className='text-gray-600 font-medium' href='/onboarding'>
                        <div className='hover:bg-blue-600 hover:text-blue-600 hover:bg-opacity-40 w-[100%] px-3 py-1.5 rounded-md'>Onboarding</div>
                    </a>

                    <a className='text-gray-600 font-medium' href='/monitoring'>
                        <div className={`w-[100%] px-3 py-1.5 rounded-md ${"bg-blue-600 text-blue-600 bg-opacity-40"}`}>Monitoring</div>
                    </a>

                    <a className='text-gray-600 font-medium' href='/flagging'>
                        <div className='hover:bg-blue-600 hover:text-blue-600 hover:bg-opacity-40 w-[100%] px-3 py-1.5 rounded-md'>Flagging</div>
                    </a>
                    <a className='text-gray-600 font-medium' href='/source-of-income'>
                        <div className='hover:bg-blue-600 hover:text-blue-600 hover:bg-opacity-40 w-[100%] px-3 py-1.5 rounded-md'>Source of Income</div>
                    </a>
                    <a className='text-gray-600 font-medium' href='/uar'>
                        <div className='hover:bg-blue-600 hover:text-blue-600 hover:bg-opacity-40 w-[100%] px-3 py-1.5 rounded-md'>UAR</div>
                    </a>
                </div>
            </div>

            <div className='flex items-center gap-3 py-4'>
                <img className='h-8 w-8 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBUpvKu3hFCCgBGsBYJDsgP0EqIjG4fkkcQ&usqp=CAU" alt="profile" />
                <div>
                    <div className='text-gray-800 text-sm font-medium'>Elon Musk</div>
                    <div className='text-gray-500 text-xs font-medium'>
                        elon@twitter.com
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;