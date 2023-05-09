import { Box, TextField, Button, Typography, Input } from "@mui/material";
import { useState } from "react";
import { mintNewNFT } from "../../Contract/contract-driver";
import { NFTStorage } from "nft.storage";
import { NFTStorageAPIKey } from "../../Contract/contract-params";
import xxx from "./empty-image.jpg";

export const NewTokenSubmitioningForm = () => {
  const [imageNFT, setImageNFT] = useState(xxx);
  const [imageThumbnails, setImageThumbnails] = useState(xxx);
  const [imageNftName, setImageNftName] = useState();
  const [imageNftDescription, setImageNftDescription] = useState();

  async function handleReadImageFromInput(image) {
    setImageNFT(image);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (event) => setImageThumbnails(event.target.result);
  }

  async function mintNewNftToken() {
    const newNft = {
      image: imageNFT,
      name: imageNftName,
      description: imageNftDescription
    };
    //push to NFT storage
    const client = new NFTStorage({ token: NFTStorageAPIKey });
    const metadataNew = await client.store(newNft);
    console.log(metadataNew.url);
    //mint to network
    mintNewNFT(metadataNew.url, "0xf1eA36E3262c370BA78619b1313CfFAaA59a9f92");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", lg: "row" },
        width: { xs: 300, sm: 500, lg: 600 }
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Box
          sx={{ width: 200, height: 200, margin: 1 }}
          component="img"
          src={imageThumbnails}
        ></Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          variant="standard"
          label="File name"
          onChange={(event) => setImageNftName(event.target.value)}
        />
        <TextField
          variant="standard"
          label="File description"
          onChange={(event) => setImageNftDescription(event.target.value)}
        />
        <Input
          sx={{ marginTop: 2 }}
          type="file"
          onChange={(event) => handleReadImageFromInput(event.target.files[0])}
        />
        <Button onClick={() => mintNewNftToken()}>Mint NewNFT</Button>
      </Box>
    </Box>
  );
};
