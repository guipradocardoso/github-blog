import { useForm } from "react-hook-form";
import { SearchInputContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
   query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
   postsLenght: number;
   getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ postsLenght, getPosts }: SearchInputProps) {
   const { register, handleSubmit} = useForm<SearchFormInput>({
      resolver: zodResolver(searchFormSchema),
   });

   async function handleSearchPost(data: SearchFormInput) {
      await getPosts(data.query)
   }

   return (
      <SearchInputContainer onSubmit={handleSubmit(handleSearchPost)}>
         <header>
            <h3>Publicações</h3>
            <span>{postsLenght} publicações</span>
         </header>

         <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
      </SearchInputContainer>
   )

}