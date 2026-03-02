"use client";
import httpService from "@/helper/services/httpService";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import { FormikProvider, useFormik } from "formik";
import { CustomButton, CustomInput, ModalLayout } from "../custom";
import { useState } from "react";

export default function GetInTouch() {
    const formik = useFormik({
        initialValues: {
            email: "",
            fullname: "",
            organizationName: "",
            message: "",
        },
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
        },
    });

    return (
        <div className=" lg:w-[200px] w-full flex flex-col gap-2 ">
            <CustomButton onClick={() => setOpen(true)}>Visit Help Center</CustomButton>
            <FormikProvider value={formik}>
                <ModalLayout
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    title="Get In Touch"
                >
                    <form onSubmit={formik.handleSubmit}>
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
                        <CustomButton type="submit" isLoading={isPending}>
                            Submit
                        </CustomButton>
                    </form>
                </ModalLayout>
            </FormikProvider>
        </div>
    );
}
