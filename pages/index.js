import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { wrap } from "framer-motion"
import { baseUrl, fetchApi } from "@/utils/fetchAPI"
import Property from "@/components/Property"

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    m="10"
  >
    <Box p="5">
      <Text color="grey.500" fontSize="medium" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3px"
        paddingBottom="3px"
        color="grey.700"
        fontWeight="medium"
      >
        {desc1} <br /> {desc2} <br />
        <Button bgColor='blue.400' color='white' _hover={{ bgColor: 'black' }} fontSize="3xl" marginTop='1rem' padding='2rem'>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Text>
    </Box>
    <Image src={imageUrl} width={500} height={300} alt="banner" />
  </Flex>
)

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForRent, propertiesForSale)
  return (
    <Box>
      <Banner
        purpose="Rent a Home"
        title1="Rental Home for "
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      <Banner
        purpose="Buy a Home"
        title1="Find, Buy & Own your "
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  )
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  )

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}
