package com.projects.server.service;
import com.projects.server.entity.ImageEntity;
import com.projects.server.repo.ImageRepository;
import com.projects.server.utility.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public ImageEntity uploadImage(MultipartFile file) throws IOException {
        ImageEntity pImage = new ImageEntity();
        pImage.setName(file.getOriginalFilename());
        pImage.setType(file.getContentType());
        pImage.setImageData(ImageUtil.compressImage(file.getBytes()));
        return imageRepository.save(pImage);
    }

    public byte[] downloadImage(String fileName){
        Optional<ImageEntity> imageData = imageRepository.findByName(fileName);
        return ImageUtil.decompressImage(imageData.get().getImageData());
    }

    public List<ImageEntity> findAll() {
        List<ImageEntity> byteImages= imageRepository.findAll();
        for(ImageEntity image:byteImages){
            Optional<ImageEntity> imageData = imageRepository.findByName(image.getName());
            byte[] imageBytes=ImageUtil.decompressImage(imageData.get().getImageData());
            image.setImageData(imageBytes);
        }
        return byteImages;
    }
}
