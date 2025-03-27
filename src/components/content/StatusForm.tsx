import { z } from "zod"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { ImagePlusIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "../ui/textarea"

const statusSchema= z.object({
  post: z.string(),
  image: z.optional(z.string())
})

function StatusForm(){
  const status = useForm<z.infer<typeof statusSchema>>({
    resolver:zodResolver(statusSchema)
  })
  const onSubmit = (values: z.infer<typeof statusSchema>) => {
    console.log(values.post)
  }
  const imagePreview = ()=>{}

  return(
    <Form {...status}>
      <Avatar>
        <AvatarImage src="/avatar/avatar(1).png"/>
        <AvatarFallback>Ts</AvatarFallback> 
      </Avatar>
      <form id = "form-status-area">
        <FormField
          control = {status.control}
          name = "post"
          render = {({field}) => (
            <FormControl>
              <FormItem>
                <Textarea className="
                  h-12 
                  text-white 
                  border-none
                  hover: bg-none
                  focus-visible: none  
                  resize-none"
                  placeholder="what is happening?!" {...field}/>
              </FormItem>
            </FormControl>
          )}
        />
        <FormField
          control = {status.control}
          name = "image"
          render = {({field}) => (
            <FormControl>
              <FormLabel htmlFor="imageUpload">
                <Button variant="ghost">
                  <ImagePlusIcon className="w-5 h-5 mr-2 text-[#04A51E]" />
                </Button>
              <FormItem>
                <Input type="file" className="hidden" accept="image/*" />
              </FormItem>
              </FormLabel>
            </FormControl>
            )}
        />
        <Button>Post</Button>
      </form>
    </Form>
      
  )

}

export default StatusForm