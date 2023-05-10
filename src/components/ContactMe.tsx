import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PageInfo } from '../../types/pageInfo'

type Props = {
    pageInfo: PageInfo
}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

function ContactMe({pageInfo}: Props) {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:vince.shadbolt@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center scroll-smooth">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
            Contact
        </h3>

        <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
            <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center">
                I have got just what you need.{" "}
                <span className="decoration-[#FF00FF]/50 underline">Lets Talk.</span>
            </h4>

            <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#FF00FF] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">{pageInfo?.attributes?.email}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-80 md:w-fit mx-auto">
                <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
                    <input {...register('name')} placeholder="Name" className="contactInput w-80 md:w-auto" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput w-80 md:w-auto" type="email" />
                </div>
                <input {...register('subject')} placeholder="Subject "className="contactInput" type="text" />
                <textarea {...register('message')} placeholder="Message" className="contactInput scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FF00FF]/80" ></textarea>
                <button type="submit" className="bg-[#FF00FF] py-5 px-10 rounded-md text-black font-bold text-lg">
                    Submit
                </button>

            </form>
        </div>
    </div>
  )
}

export default ContactMe