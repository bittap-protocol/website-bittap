import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Image, Flex, Heading, Container, Box, SimpleGrid } from "@chakra-ui/react";

export default function PagePage() {
  return (
    <>
      <Helmet>
        <title>Bittap</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="white.A700_01" w="100%">
        <Box bg="white.A700_01">
          <Flex
            pb={{ base: "20px", sm: "22px" }}
            gap="28px"
            bgGradient="linear-gradient(83deg, #e0eeff9e,#8876f4)"
            flexDirection="column"
          >
            <Flex gap="28px" bg="gray.600" justifyContent="center" alignItems="center" p="11px" as="header">
              <Image src="images/img_wechatimg1275_1.png" w="59px" />
              <Container display="flex" maxW="1201px" w="100%" px="0px" py={{ base: "20px", sm: "21px" }} mx="auto">
                <Heading size="xs" as="h4" color="white.A700_01" textAlign="center" fontSize="24px" alignSelf="end">
                  BitTap
                </Heading>
              </Container>
            </Flex>
            <Container
              pb="12px"
              display="flex"
              justifyContent="space-between"
              alignItems="start"
              maxW="1536px"
              w="100%"
              gap="20px"
              px="12px"
              mx="auto"
              flexDirection={{ md: "row", base: "column" }}
              p={{ md: "", base: "20px" }}
            >
              <Flex
                ml={{ md: "108px", base: "0px" }}
                pb={{ md: "85px", base: "20px" }}
                w={{ md: "49%", base: "100%" }}
                justifyContent="center"
              >
                <Flex pt={{ base: "20px", sm: "23px" }} w="100%" flexDirection="column" alignItems="start">
                  <Heading size="lg" as="h1" fontSize="54.58px" lineHeight="66px">
                    <Heading size="lg" as="span" color="gray.900_01">
                      Decentralized&nbsp;
                    </Heading>
                    <Heading size="lg" as="span" color="gray.600">
                      <>
                        Taproot Assets protocol Wallet
                        <br />
                      </>
                    </Heading>
                  </Heading>
                  <Flex mt="47px" pr="5px" alignSelf="center" py="5px">
                    <Text size="xl" color="gray.900_7f" mb="26px" fontSize="18.75px">
                      The first decentralized wallet and exchange of Taproot Assets
                    </Text>
                  </Flex>
                  <Button mt="81px" fontWeight={700} minW="180px" borderRadius="2px" px={{ base: "20px", sm: "" }}>
                    Commig Soon
                  </Button>
                </Flex>
              </Flex>
              <Flex
                mt="3px"
                mr={{ md: "140px", base: "0px" }}
                pt={{ md: "83px", base: "20px" }}
                w={{ md: "41%", base: "100%" }}
                justifyContent="center"
              >
                <Image
                  src="images/img_rectangle_6.png"
                  h={{ md: "319px", base: "auto" }}
                  w="100%"
                  borderRadius="26px"
                />
              </Flex>
            </Container>
          </Flex>
          <Flex
            mt="95px"
            bg="white.A700_01"
            flexDirection="column"
            alignItems="center"
            p={{ base: "20px", sm: "39px" }}
            borderRadius="24px"
          >
            <Flex gap={{ base: "30px", sm: "60px" }} w={{ md: "51%", base: "100%" }} flexDirection="column">
              <Flex>
                <Heading size="s" color="gray.900_02" textAlign="center" fontSize="38.91px">
                  All-in-One Wallet for Your Digital Assets
                </Heading>
              </Flex>
              <SimpleGrid
                gap="100px"
                justifyContent="center"
                sx={{ "grid-template-columns": "repeat(auto-fill, minmax(200px , 1fr))" }}
              >
                <Flex pb="14px" gap="19px" w="100%" flexDirection="column" alignItems="center">
                  <Image src="images/img_image.png" w="60px" />
                  <Flex px={{ md: "66px", base: "20px" }}>
                    <Text textAlign="center" fontSize="13.23px">
                      Mint Asset
                    </Text>
                  </Flex>
                </Flex>
                <Flex pb="14px" gap="19px" w="100%" flexDirection="column" alignItems="center">
                  <Image src="images/img_home_desc_2_663e84e_png.png" w="60px" />
                  <Flex>
                    <Text textAlign="center" fontSize="13.23px">
                      BTC Ecosystem
                    </Text>
                  </Flex>
                </Flex>
                <Flex pb="14px" gap="19px" w="100%" flexDirection="column" alignItems="center">
                  <Image src="images/img_home_desc_3_092627a_png.png" w="60px" />
                  <Flex px={{ md: "49px", base: "20px" }}>
                    <Text textAlign="center" fontSize="13.23px">
                      Decentralization
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="19px" w="100%" flexDirection="column" alignItems="center">
                  <Image src="images/img_home_desc_4_0428368_png.png" w="60px" />
                  <Flex>
                    <Text textAlign="center" fontSize="13.23px">
                      Asset management
                    </Text>
                  </Flex>
                </Flex>
                <Flex pb="14px" gap="19px" w="100%" flexDirection="column" alignItems="center">
                  <Image src="images/img_home_desc_5_5d96579_png.png" w="60px" />
                  <Flex>
                    <Text textAlign="center" fontSize="13.13px">
                      Taproot Assets
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="19px" w="100%" flexDirection="column" alignItems="center">
                  <Image src="images/img_image_60x60.png" w="60px" />
                  <Flex>
                    <Text textAlign="center" fontSize="13.13px">
                      Lightning Network
                    </Text>
                  </Flex>
                </Flex>
              </SimpleGrid>
            </Flex>
          </Flex>
          <Box pb={{ md: "87px", base: "20px" }} bg="gray.50" px={{ md: "87px", base: "20px" }}>
            <Container maxW="1120px" w="100%" px="0px" mx="auto">
              <Flex justifyContent="space-between" gap="20px" flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  w={{ md: "50%", base: "100%" }}
                  flexDirection="column"
                  justifyContent="center"
                  py={{ md: "114px", base: "20px" }}
                >
                  <Flex alignSelf="start">
                    <Heading mb="9px" fontSize="39.38px">
                      Fully decentralized wallet
                    </Heading>
                  </Flex>
                  <Text size="lg" color="blue_gray.500" lineHeight="22px">
                    <>
                      Simplest way to track, send, store, exchMnemonic phrases / private keys are entirely owned by the
                      user; <br />
                      Wallet creation / importation is possible on any device;ange & buy Cryptos, and invest in NFTs.
                    </>
                  </Text>
                </Flex>
                <Box
                  h={{ md: "380px", base: "auto" }}
                  bgImage="url(/images/img_section2_1_1b67c04_png.png)"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  w={{ md: "34%", base: "100%" }}
                  p="13px"
                >
                  <Image src="images/img_image_3.png" mt="16px" mb="3px" w="100%" borderRadius="49px" h="auto" />
                </Box>
              </Flex>
              <Flex justifyContent="space-between" gap="20px" flexDirection={{ md: "row", base: "column" }}>
                <Box bg="gray.400" w={{ md: "34%", base: "100%" }} borderRadius="17px">
                  <Image src="images/img_image_5.png" h={{ md: "380px", base: "auto" }} w="100%" borderRadius="17px" />
                </Box>
                <Flex
                  w={{ md: "50%", base: "100%" }}
                  flexDirection="column"
                  justifyContent="center"
                  py={{ md: "123px", base: "20px" }}
                >
                  <Flex pb="15px" alignSelf="start">
                    <Heading as="h3" color="blue.900" fontSize="39.84px">
                      Asset issuance
                    </Heading>
                  </Flex>
                  <Box pb={{ base: "20px", sm: "22px" }}>
                    <Flex>
                      <Text size="lg" color="blue_gray.500" w="75%" lineHeight="22px">
                        <>
                          Customized asset names, quantities, and other information;
                          <br />
                          Issued assets are fully owned by the user;
                        </>
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
              <Flex justifyContent="space-between" gap="20px" flexDirection={{ md: "row", base: "column" }}>
                <Flex
                  w={{ md: "50%", base: "100%" }}
                  flexDirection="column"
                  justifyContent="center"
                  py={{ md: "88px", base: "20px" }}
                >
                  <Flex pb="14px" alignSelf="start">
                    <Heading as="h4" fontSize="39.38px">
                      Native Taproot Assets addresses
                    </Heading>
                  </Flex>
                  <Flex py={{ base: "20px", sm: "22px" }}>
                    <Flex mb="22px">
                      <Text size="md" color="blue_gray.500" fontSize="14.63px" alignSelf="end">
                        Fully compatible with BTC mainnet and Taproot Assets addresses;
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Box
                  h={{ md: "380px", base: "auto" }}
                  bgImage="url(/images/img_section2_3_be3a4fe_png.png)"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  w={{ md: "34%", base: "100%" }}
                  borderRadius="24px"
                >
                  <Image src="images/img_image_6.png" h={{ md: "380px", base: "auto" }} w="100%" borderRadius="24px" />
                </Box>
              </Flex>
            </Container>
          </Box>
          <Flex bg="white.A700_01" justifyContent="center" p={{ md: "53px", base: "20px" }} borderRadius="24px">
            <Flex mt="67px" w={{ md: "58%", base: "100%" }} justifyContent="center">
              <Flex
                pb={{ base: "20px", sm: "30px" }}
                gap={{ base: "30px", sm: "60px" }}
                w="100%"
                flexDirection="column"
                alignItems="center"
              >
                <Flex>
                  <Heading color="gray.900_02" textAlign="center" fontSize="39.22px">
                    Start Your Journey in 3 Steps
                  </Heading>
                </Flex>
                <Flex alignSelf="stretch" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                  <Flex flex={1} flexDirection={{ md: "row", base: "column" }} alignSelf="stretch">
                    <Flex
                      gap="42px"
                      w="100%"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      py="16px"
                    >
                      <Flex
                        mt="4px"
                        alignSelf="end"
                        w={{ md: "69%", base: "100%" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                      >
                        <Image src="images/img_step_1_80ef638_png.png" w="75px" />
                        <Box h="2px" mb="30px" alignSelf="end" bg="blue_gray.400" w="40%" />
                      </Flex>
                      <Flex>
                        <Text size="lg" textAlign="center" fontSize="15.13px">
                          Download BitTap
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex pb="16px" gap="23px" w="100%" flexDirection="column" alignItems="start">
                      <Flex
                        alignSelf="end"
                        w={{ md: "73%", base: "100%" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                      >
                        <Image src="images/img_step_2_9453b7a_png.png" w="114px" />
                        <Box h="2px" mb="49px" alignSelf="end" bg="blue_gray.400" w="37%" />
                      </Flex>
                      <Flex>
                        <Text size="lg" textAlign="center" fontSize="15.13px">
                          Create Wallet
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    ml={{ md: "-46px", base: "0px" }}
                    pb="16px"
                    gap="21px"
                    position="relative"
                    w={{ md: "32%", base: "100%" }}
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image src="images/img_step_3_e2e2c53_png.png" w="114px" />
                    <Flex>
                      <Text size="md" textAlign="center" fontSize="14.75px">
                        Manage Crypto
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Button
                  colorScheme="blue_900"
                  fontWeight={700}
                  minW="160px"
                  borderRadius="4px"
                  px={{ base: "20px", sm: "" }}
                >
                  Coming soon
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Box h="740px" pb={{ md: "178px", base: "20px" }} bg="blue_gray.900_01" position="relative">
            <Flex
              h={{ md: "532px", base: "auto" }}
              pb={{ md: "111px", base: "20px" }}
              bgImage="url(/images/img_group_39.svg)"
              bgSize="cover"
              bgRepeat="no-repeat"
              alignItems="start"
              position="absolute"
              top="0.00px"
              right="0px"
              left="0px"
              px={{ md: "111px", base: "20px" }}
              m="auto"
            >
              <Container
                mb="285px"
                display="flex"
                justifyContent="center"
                maxW="1440px"
                w="100%"
                px={{ md: "631px", base: "20px" }}
              >
                <Flex>
                  <Heading size="s" color="white.A700_01" mt="87px" textAlign="center" fontSize="38.91px">
                    RoadMap
                  </Heading>
                </Flex>
              </Container>
            </Flex>
            <Image
              src="images/img_image_2.png"
              h="420px"
              w="100%"
              position="absolute"
              bottom="24%"
              right="0px"
              left="0px"
              maxW="1131px"
              m="auto"
              p={{ md: "", base: "20px" }}
            />
          </Box>
          <Flex pb={{ base: "20px", sm: "35px" }} gap="37px" bg="gray.900" flexDirection="column" alignItems="center">
            <Box alignSelf="stretch">
              <Box
                pb={{ md: "64px", base: "20px" }}
                borderColor="blue_gray.900"
                borderBottomWidth="1px"
                borderStyle="solid"
                bgGradient="linear-gradient(52deg, #2d5fdf,#00cb6a)"
                px={{ md: "64px", base: "20px" }}
              >
                <Container maxW="1200px" w="100%" px="0px" mx="auto">
                  <Flex
                    justifyContent="space-between"
                    alignItems="start"
                    gap="20px"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <Flex
                      pt={{ md: "80px", base: "20px" }}
                      gap="16px"
                      w={{ md: "63%", base: "100%" }}
                      flexDirection="column"
                      alignItems="start"
                    >
                      <Flex>
                        <Heading color="green.50" fontSize="39.53px">
                          Download BitTapWallet to manage your assets. 
                        </Heading>
                      </Flex>
                      <Flex pr="8px" w={{ md: "75%", base: "100%" }} justifyContent="center">
                        <Text size="lg" color="green.50" lineHeight="24px">
                          <>
                            Your private keys of wallet is the only way to keep your digital assets safe. We
                            <br />
                            will never collect or access your private keys or mnemonics of your wallets.
                          </>
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex pt={{ md: "102px", base: "20px" }} w={{ md: "17%", base: "100%" }} flexDirection="column">
                      <Flex alignSelf="start" py={{ base: "20px", sm: "30px" }}>
                        <Button
                          variant="outline"
                          colorScheme="black_900"
                          leftIcon={<Image src="images/img_contrast.png" w="30px" h="20px" />}
                          alignSelf="start"
                          minW="170px"
                          borderRadius="4px"
                          px={{ base: "20px", sm: "" }}
                          onClick={() => window.open("https://twitter.com/BittapLab", "_blank")}
                        >
                          Follow us
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Container>
              </Box>
            </Box>
            <Text size="xs" color="white.A700_66" fontFamily="Roboto" textAlign="center">
              Copyright © 2018-2024 BitTapLab
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
