import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {TextInput,Select, FileInput,Button} from 'flowbite-react'

export default function CreatePost(){
    return (
        <div className="p-3 max-w-3xl mx-auto min-h-screen">
            <h1 className="text-center text-3xl my-7 foot-semibold">Create a Post</h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row justify-between">
                      <TextInput type='text' placeholder='Title 'required id='title'
                      className='flex-1'/>
                       <Select >
                        <option value="uncategorized">
                        Select a category
                        </option>
                        <option value="Machine learning">Machine learning</option>
                        <option value="Natural language processing">Natural language processing</option>
                        <option value="Neural Networks">Neural Networks</option>
                        <option value="Deep Learning">Deep Learning</option>
                        <option value="Cognitive Computing">Cognitive Computing</option>
                        <option value="Computer Vision">Computer Vision</option>
                       </Select>
                </div>
                <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
                    <FileInput type='file' accept='image/*'/>
                    <Button type='button' className='bg-neutral-500' size='sm' outline>Upload Image</Button> 
                </div>
                <ReactQuill theme="snow" placeholder='write something...' className='h-72 mb-12' required/>
                <Button type='submit' className='bg-neutral-500' outline>Publish</Button>
            </form>
        </div>
    )
}
