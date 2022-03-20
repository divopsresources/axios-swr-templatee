const SignUpForm = () => {
    return (
        <div>
            <span className="text-gray-700 dark:text-gray-700 flex justify-center">Use the form below to create a Divops account or continue anonymously.</span>
            <form id="SignUpForm" className="max-w-xl mx-auto bg-gray-900 bg-opacity-90 rounded pt-1">
                <div className="flex flex-wrap justify-center -mx-3 mb-5 ">
                    <div className="w-full px-3 mb-4 md:mb-0">
                        {/* Name */}
                        <label className="block text-indigo-100 dark:text-indigo-100 text-lg font-medium text-center" htmlFor="first-name">
                            Name
                            <span className=" text-gold-100 dark;text-gold-200 text-lg">
                                *
                            </span>
                        </label>
                        <input id="first-name" type="text" className="form-input area w-full area bg-black border border-gray-400 focus:border-white text-gold-200 dark;text-gold-200 text-lg pt-2" placeholder="type your name here..." />
                    </div>
                    {/* email */}
                    <div className="w-full px-3">
                        <label className="block text-gray-50 dark:text-gray-50 text-sm font-medium mb-1 pt-0" htmlFor="last-name">
                        </label>
                        <label className="block text-indigo-100 dark:text-indigo-100 text-lg font-medium mb-1 text-center" htmlFor="first-name">Email<span className=" text-gold-100 dark;text-gold-200 text-lg"> * </span>
                        </label>
                        <input id="last-name" type="text" className="form-input area w-full bg-black border border-gray-400 focus:border-white text-gold-200 dark;text-gold-200 text-lg pl-4" placeholder="type your email here..." />
                    </div>
                    {/* username */}
                    <div className="w-full px-3">
                        <label className="block text-gray-50 dark:text-gray-50 text-sm font-medium mb-1 pt-0" htmlFor="last-name">
                        </label>
                        <label className="block text-indigo-100 dark:text-indigo-100 text-lg font-medium mb-1 text-center" htmlFor="first-name">Username<span className=" text-gold-100 dark;text-gold-200 text-lg"> * </span>
                        </label>
                        <input id="last-name" type="text" className="form-input area w-full bg-black border border-gray-400 focus:border-white text-gold-200 dark;text-gold-200 text-lg pl-4" placeholder="Please select a username..." />
                    </div>
                </div>
                {/* Details */}
                {/* <div className="flex flex-wrap -mx-3 mb-5">
                    <div className="w-full px-3">
                        <textarea id="message" rows="4" className="form-text area w-full bg-black border border-gray-400 focus:border-white text-gold-200 dark;text-gold-200 text-lg pl-2" placeholder=" Feel free to include a brief message as well."></textarea>
                    </div>
                </div> */}
            </form>

        </div>
    )
}

export default SignUpForm