"use client";
import httpService from "@/helper/services/httpService";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import { FormikProvider, useFormik } from "formik";
import { CustomButton, CustomInput, ModalLayout } from "../custom";
import { useState } from "react";
import * as Yup from "yup";

export default function GetInTouch() {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Enter a valid email address")
            .required("Email is required"),

        fullname: Yup.string()
            .min(2, "Full name must be at least 2 characters")
            .required("Full name is required"),

        organizationName: Yup.string()
            .min(2, "Organization name must be at least 2 characters")
            .required("Organization name is required"),

        message: Yup.string()
            .min(10, "Message must be at least 10 characters")
            .required("Message is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            fullname: "",
            organizationName: "",
            message: "",
        },
        validationSchema,
        onSubmit: (values) => mutate(values),
    });

    const [open, setOpen] = useState<boolean>(false);

    const { mutate, isPending } = useMutation({
        mutationFn: (data: {
            email: string;
            fullname: string;
            organizationName: string;
            message: string;
        }) => httpService.post(`/core/get-in-touch`, data),
        onError: (error: any) => {
            console.log(error?.response?.data?.error?.details?.message);

            addToast({
                title: "Error",
                description: error?.response?.data?.error?.details?.message,
                color: "danger",
                timeout: 3000,
            });
        },
        onSuccess: () => {
            addToast({
                title: "Success",
                description: "Message Sent",
                color: "success",
                timeout: 3000,
            });
            formik.resetForm();
            setOpen(false);
        },
    });

    return (
        <div className=" lg:w-[200px] w-full flex flex-col gap-2 ">
            <CustomButton onClick={() => setOpen(true)}>
                Visit Help Center
            </CustomButton>
            <FormikProvider value={formik}>
                <ModalLayout
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    title="Get In Touch"
                >
                    <form
                        onSubmit={formik.handleSubmit}
                        className=" w-full flex flex-col gap-4 "
                    >
                        <CustomInput
                            label="Email"
                            name="email"
                            placeholder="Email"
                        />
                        <CustomInput
                            label="Full Name"
                            name="fullname"
                            placeholder="Full Name"
                        />
                        <CustomInput
                            label="Organization Name"
                            name="organizationName"
                            placeholder="Organization Name"
                        />
                        <CustomInput
                            label="Message"
                            textarea
                            name="message"
                            placeholder="Message"
                        />
                        <div className=" mt-4 w-full ">
                            <CustomButton
                                type="submit"
                                fullWidth
                                isLoading={isPending}
                            >
                                Submit
                            </CustomButton>
                        </div>
                    </form>
                </ModalLayout>
            </FormikProvider>
        </div>
    );
}
