import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Dialog,
  Button,
  DialogTitle
} from "@mui/material";
import { useEffect, useState } from "react";
import { getMintingEvents } from "../../Contract/contract-driver";

export function NFTImageListComponent() {
  const [nftDataArray, setNFTDataArray] = useState([]);
  const [imageDialogData, setImageDialogData] = useState({ open: false });

  const handleOpenImage = (src, name) => {
    setImageDialogData({ open: true, imageSrc: src, imageName: name });
  };

  useEffect(() => {
    getMintingEvents().then((res) =>
      setNFTDataArray(
        res.map((el) => {
          return {
            name: el.name,
            description: el.description,
            image: el.image
          };
        })
      )
    );
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overFlow: "auto"
      }}
    >
      <ImageList
        sx={{
          margin: 0,
          bgcolor: "",
          width: { xs: 300, sm: 400, md: 550, lg: 700 }
        }}
      >
        {nftDataArray.map((el, index) => (
          <ImageListItem
            onClick={() => handleOpenImage(el.image, el.name)}
            sx={{ width: { xs: 140, sm: 180, md: 220 }, height: 100 }}
            key={index}
          >
            <img src={el.image} alt={el.name} />

            <ImageListItemBar title={el.name} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageDialog
        data={imageDialogData}
        onClose={() => setImageDialogData({ open: false })}
      />
    </Box>
  );
}

const ImageDialog = (props) => {
  return (
    <Dialog open={props.data.open} onClose={props.onClose}>
      <DialogTitle> {props.data.imageName}</DialogTitle>
      <img src={props.data.imageSrc} alt={props.data.imgName} />
    </Dialog>
  );
};
