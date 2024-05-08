'use client'
import React from 'react'
import {Button,Input} from "@nextui-org/react";
import NavBar from '@/components/navbar/page';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'), 
  email: Yup.string().email('Invalid email').required('Required'),
});
const login = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='h-screen bg-gradient-to-r from-indigo-500  '>
      <NavBar/>
      <div className="flex justify-center">
        <div className='bg-white border border-inherit m-7 w-none p-4 rounded ring-2 ring-gray-200'>
          <h3>Sign Up</h3><br/>
        <form onSubmit={formik.handleSubmit}>
        <div className='inline-block'>
        <label htmlFor="firstName"></label>
      <Input
      isClearable
      label="FirstName"
      variant="bordered"
      onChange={formik.handleChange}
      name="firstName"
      value={formik.values.firstName}
      placeholder="Enter your firstName"
      className="max-w-xs"
    /><br/>
        {formik.errors.firstName}
          </div>
          <div className='inline-block ml-4'>
      <label htmlFor="lastName"></label>
      <Input
      isClearable
      label="LastName"
      variant="bordered"
      onChange={formik.handleChange}
      name="lastName"
      value={formik.values.lastName}
      placeholder="Enter your lastName"
      className="max-w-xs"
    /><br/>
      {formik.errors.lastName}
          </div>
          <label htmlFor="email"></label>
          <Input
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          onChange={formik.handleChange}
          name="email"
          value={formik.values.email}
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        /><br/>

    {formik.errors.email}
    <Input
          isClearable
          type="number"
          label="Moblie number"
          variant="bordered"
          onChange={formik.handleChange}
          name="number"
          value={formik.values.number}
          placeholder="Enter your moblie number"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        /><br/>
          {formik.errors.number}
      <div className='inline-block'>
        <Input
          isClearable
          type="password"
          label="Password"
          variant="bordered"
          onChange={formik.handleChange}
          name="password"
          value={formik.values.password}
          placeholder="Enter your password"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        /><br/>
          {formik.errors.password}
      </div>
      <div className='inline-block ml-4'>
          <Input
          isClearable
          type="password"
          label="Confirm password"
          variant="bordered"
          onChange={formik.handleChange}
          name="password"
          value={formik.values.password}
          placeholder="Enter your password"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        /><br/>
          {formik.errors.password}
      </div>
          <div>
          <Button type='submit' radius="full" className="bg-gradient-to-tr from-pink-500  to-yellow-500 text-white shadow-lg">
          Submit
          </Button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};


export default login