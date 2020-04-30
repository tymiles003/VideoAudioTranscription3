/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      name
      Videos {
        items {
          id
          albumId
          bucket
          labels
        }
        nextToken
      }
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      name
      Videos {
        items {
          id
          albumId
          bucket
          labels
        }
        nextToken
      }
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      name
      Videos {
        items {
          id
          albumId
          bucket
          labels
        }
        nextToken
      }
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      albumId
      album {
        id
        name
        Videos {
          nextToken
        }
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      labels
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      albumId
      album {
        id
        name
        Videos {
          nextToken
        }
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      labels
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      albumId
      album {
        id
        name
        Videos {
          nextToken
        }
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      labels
    }
  }
`;
export const createVocabulary = /* GraphQL */ `
  mutation CreateVocabulary(
    $input: CreateVocabularyInput!
    $condition: ModelVocabularyConditionInput
  ) {
    createVocabulary(input: $input, condition: $condition) {
      id
      userId
      vocabularies
      owner
    }
  }
`;
export const updateVocabulary = /* GraphQL */ `
  mutation UpdateVocabulary(
    $input: UpdateVocabularyInput!
    $condition: ModelVocabularyConditionInput
  ) {
    updateVocabulary(input: $input, condition: $condition) {
      id
      userId
      vocabularies
      owner
    }
  }
`;
export const deleteVocabulary = /* GraphQL */ `
  mutation DeleteVocabulary(
    $input: DeleteVocabularyInput!
    $condition: ModelVocabularyConditionInput
  ) {
    deleteVocabulary(input: $input, condition: $condition) {
      id
      userId
      vocabularies
      owner
    }
  }
`;
