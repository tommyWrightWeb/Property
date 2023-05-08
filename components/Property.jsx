import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";




import React from "react";

const Property = ({
  property: { coverPhoto, price, rooms, rentFrequency, title, baths, area, agency, isVerified, externalID },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap="wrap" flexDirection='row' w="400px" p='3' paddingTop="0" justifyContent="centre" cursor="pointer">
        <Box>
          <Image src={coverPhoto ? coverPhoto.url : {GoVerified}} alt="house" width={400} height={250} />
        </Box>
        <Box w='full'>
            <Flex paddingTop='2' alignItems='center' justifyContent='space-between' >
<Flex alignItems='center'>
    <Box paddingRight='3' color='green.400'> {isVerified && <GoVerified />}</Box>
<Text fontSize='lg' fontWeight='bold'>
    AED { millify( price )} {rentFrequency && `${rentFrequency}`}
</Text>
</Flex>

            </Flex>
<Flex alignItems='center' justifyContent='space-between' w='250px' color='blue.400'>
    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
</Flex>
<Text fontSize='lg'>
{title.length > 30 ? `${title.substring(0, 30)}...1` : title}
</Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
