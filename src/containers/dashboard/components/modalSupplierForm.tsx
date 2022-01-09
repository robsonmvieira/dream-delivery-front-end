import { HStack, Box, FormControl, FormLabel, Input, Flex, Textarea, ModalFooter, Button, Text } from "@chakra-ui/react"
import { ErrorMessage } from "@hookform/error-message"
import { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { SupplierMapper } from "../../../mappers/supplier.mapper";
import { Supplier } from "../../../models/supplier.model";


export type ModalSupplierFormProps = {
  onSubmit: SubmitHandler<Supplier>
  onCloseSupplierModal: () => void
}


const ModalSupplierFom = ({onSubmit, onCloseSupplierModal}: ModalSupplierFormProps) => {
  const mapper = new SupplierMapper();

  const [cep, setCep] = useState<string>("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Supplier>();


  const url = () => `https://viacep.com.br/ws/${cep}/json`;

  useEffect(() => {
    if (cep?.length === 8) {
      fetch(url(), { mode: "cors" })
        .then((response) => response.json())
        .then((data) => {
          const address = mapper.addressMapper(data);
          reset({ address });
        })
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cep]);

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <HStack spacing="4" w="full">
      <Box w="full">
        <FormControl color="white">
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            type="text"
            {...register("name", {
              required: "O Nome do fornecedor é obrigatório",
              minLength: {
                value: 3,
                message:
                  "O nome tem que ser maior do que 3 caracteres",
              },
            })}
          />
        </FormControl>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <Text mt="1" color="pink.400">
              * {message}
            </Text>
          )}
        />
      </Box>

      <Box w="full">
        <FormControl color="white">
          <FormLabel htmlFor="cnpj">CNPJ</FormLabel>
          <Input
            id="cnpj"
            type="text"
            {...register("CNPJ", {
              required: "O CNPJ tem que ser informado",
              minLength: {
                value: 14,
                message: "O CNPJ precisa ter 14 digitos",
              },
            })}
          />
        </FormControl>
        <ErrorMessage
          errors={errors}
          name="CNPJ"
          render={({ message }) => (
            <Text mt="1" color="pink.400">
              * {message}
            </Text>
          )}
        />
      </Box>

      <Box w="full">
        <FormControl color="white">
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "O E-mail é obrigatório",
            })}
          />
        </FormControl>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <Text mt="1" color="pink.400">
              * {message}
            </Text>
          )}
        />
      </Box>

      <Box w="full">
        <FormControl color="white">
          <FormLabel htmlFor="phone">Telefone</FormLabel>
          <Input
            id="phone"
            type="text"
            {...register("phone", {
              required: "O Telefone é obrigatório",
            })}
          />
        </FormControl>
        <ErrorMessage
          errors={errors}
          name="phone"
          render={({ message }) => (
            <Text mt="1" color="pink.400">
              * {message}
            </Text>
          )}
        />
      </Box>
    </HStack>

    <Flex mt="5" direction="column">
      <Text fontWeight="medium" fontSize="2xl">
        Endereço
      </Text>

      <HStack spacing="4" w="full">
        <Box w="full">
          <FormControl color="white">
            <FormLabel htmlFor="zipCode">CEP</FormLabel>
            <Input
              id="zipCode"
              {...register("address.zipCode", 
              {
                required: "O Cep deve ser informado"
              })}
              onChange={(e) => setCep(e.target.value)}
              type="text"
            />
          </FormControl>

          <ErrorMessage
          errors={errors}
          name="address.zipCode"
          render={({ message }) => (
            <Text mt="1" color="pink.400">
              * {message}
            </Text>
          )}
        />
        </Box>
        
        <Box w="full">
          <FormControl color="white">
            <FormLabel htmlFor="street">Rua</FormLabel>
            <Input
              id="street"
              type="text"
              {...register("address.street")}
            />
          </FormControl>


          <ErrorMessage
          errors={errors}
          name="address.street"
          render={({ message }) => (
            <Text mt="1" color="pink.400">
              * {message}
            </Text>
          )}
        />
        </Box>

        <Box w="full">
          <FormControl color="white">
            <FormLabel htmlFor="number">Número</FormLabel>
            <Input
              id="number"
              type="text"
              {...register("address.number", {
                required: "O número é obrigatório"
              })}
            />
          </FormControl>

          <ErrorMessage
            errors={errors}
            name="address.number"
            render={({ message }) => (
              <Text mt="1" color="pink.400">
                * {message}
              </Text>
            )}
          />

        </Box>


        <Box w="full">
        <FormControl color="white">
          <FormLabel htmlFor="neighborhood">Bairro</FormLabel>
          <Input
            id="neighborhood"
            type="text"
            {...register("address.neighborhood",{
              required: "O bairro é obrigatório"
            })}
          />
        </FormControl>
          <ErrorMessage
            errors={errors}
            name="address.neighborhood"
            render={({ message }) => (
              <Text mt="1" color="pink.400">
                * {message}
              </Text>
            )}
          />

        </Box>

        <Box w="full">
        <FormControl color="white">
          <FormLabel htmlFor="city">Cidade</FormLabel>
          <Input
            id="city"
            type="text"
            {...register("address.city",{
              required: "a cidade é obrigatório"
            })}
          />
        </FormControl>
          <ErrorMessage
            errors={errors}
            name="address.city"
            render={({ message }) => (
              <Text mt="1" color="pink.400">
                * {message}
              </Text>
            )}
          />

        </Box>


        <Box w="full">
        <FormControl color="white">
          <FormLabel htmlFor="city">Cidade</FormLabel>
          <Input
            id="city"
            type="text"
            {...register("address.city",{
              required: "a cidade é obrigatório"
            })}
          />
        </FormControl>
          <ErrorMessage
            errors={errors}
            name="address.city"
            render={({ message }) => (
              <Text mt="1" color="pink.400">
                * {message}
              </Text>
            )}
          />

        </Box>


        <Box w="full">
        <FormControl color="white">
          <FormLabel htmlFor="state">Estado</FormLabel>
          <Input
            id="state"
            type="text"
            {...register("address.state",{
              required: "O estado é obrigatório"
            })}
          />
        </FormControl>
          <ErrorMessage
            errors={errors}
            name="address.state"
            render={({ message }) => (
              <Text mt="1" color="pink.400">
                * {message}
              </Text>
            )}
          />

        </Box>

      </HStack>
      <HStack mt="10">
        <FormControl color="white">
          <FormLabel htmlFor="state">
            Informaçõe adicionais
          </FormLabel>
          <Textarea {...register("address.moreInfo")} />
        </FormControl>
      </HStack>
    </Flex>

    <ModalFooter>
      <Button type="submit" colorScheme="pink" mr={5}>
        Salvar
      </Button>
      <Button variant="solid" onClick={onCloseSupplierModal}>
        Cancelar
      </Button>
    </ModalFooter>
  </form>
  )
}


export default ModalSupplierFom