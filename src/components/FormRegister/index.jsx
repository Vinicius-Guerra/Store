import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "./formRegisterSchema";

export const FormRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formRegisterSchema)
    })

    

    return (
        <form>
            
        </form>
    )
}