
import Image from 'next/image';
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Logo from '../../assets/logo/logo.svg';
import TwitterIcon from '../../assets/icon/twitter_icon.svg';
import InstagramIcon from '../../assets/icon/instagram_icon.svg';

const navigation = [
    { name: "About | FAQ", href: "/about", current: false },
    { name: "Collection", href: "/collection", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const Header = (props) => {
    return (
        <Disclosure as="nav" className="bg-transparent absolute top-0 w-full z-10">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto  xl:px-0 md:px-5 py-2">
                        <div className="relative flex items-center justify-betwe en h-16">

                            <div className="flex-1 flex items-center my-auto sm:justify-center justify-between sm:items-stretch w-full sm:justify-between">
                                <div className=" inset-y-0 left-0 flex w-1/3 items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center sm:p-0 p-2 rounded-md text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden sm:block p-2 w-1/3 sm:p-0 my-auto justify-start">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-900 ",
                                                    "pr-3 py-2 rounded-md text-sm font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex-shrink-0 flex sm:p-0 items-center w-1/3 my-auto justify-center">

                                    <Image
                                        className="block w-44"
                                        src={Logo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="w-1/3 justify-end sm:p-0 my-auto flex p-2">
                                    <Image src={TwitterIcon} alt='png' className="w-14" />
                                    <Image src={InstagramIcon} alt='png' className="w-14" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-900 text-center hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header;