window.SIDEBAR_ITEMS = {"enum":[["AccessQualifier","The access permissions for the image."],["Arrayed","Whether the image uses arrayed content."],["Dimensionality","The dimension of the image."],["ImageDepth","Whether a given image contains depth information. Note Whether or not to perform depth comparisons is a property of the sampling code, not of this type."],["ImageFormat","The underlying internal representation of the image."],["Multisampled","Whether the image uses arrayed content."],["Sampled","Whether or not the image will be accessed in combination with a sampler."]],"macro":[["Image","A macro for creating SPIR-V `OpTypeImage` types. Always produces a `spirv_std::image::Image<...>` type."]],"struct":[["Image","An opaque image type. Corresponds to `OpTypeImage`."],["SampledImage","An image combined with a sampler in a single value, enabling filtered accesses of the image’s contents. Corresponds to `OpTypeSampledImage`."]],"trait":[["HasGather","This is a marker trait to represent the constraints on `OpImageGather` too complex to be represented by const generics. Specifically:"],["HasQueryLevels","This is a marker trait to represent the constraints on `OpImageQueryLevels` and `OpImageQueryLod` too complex to be represented by const generics. Specifically:"],["HasQuerySize","This is a marker trait to represent the constraints on `OpImageQuerySize` too complex to be represented by const generics. Specifically:"],["HasQuerySizeLod","This is a marker trait to represent the constraints on `OpImageQuerySizeLod` too complex to be represented by const generics. Specifically:"],["ImageCoordinate","Marker trait for arguments that accept a coordinate for an [`crate::Image`]."],["ImageCoordinateSubpassData","Marker trait for arguments that are valid for a [`crate::image::Dimensionality::SubpassData`] image query."],["SampleType","Marker trait for arguments that accept single scalar values or vectors of scalars."]],"type":[["Cubemap","A cubemap, i.e. a cube of 6 textures, sampled using a direction rather than image coordinates."],["Image1d","A 1d image used with a sampler."],["Image1dArray","An array of 1d images, used with a sampler."],["Image1dI","A 1d image used with a sampler, containing signed integer data."],["Image1dIArray","An array of 1d images, used with a sampler, each containing signed integer data."],["Image1dU","A 1d image used with a sampler, containing unsigned integer data."],["Image1dUArray","An array of 1d images, used with a sampler, each containing unsigned integer data."],["Image2d","A 2d image used with a sampler. This is pretty typical and probably what you want."],["Image2dArray","An array of 2d images, used with a sampler."],["Image2dI","A 2d image used with a sampler, containing signed integer data."],["Image2dIArray","An array of 2d images, used with a sampler, each containing signed integer data."],["Image2dU","A 2d image used with a sampler, containing unsigned integer data."],["Image2dUArray","An array of 2d images, used with a sampler, each containing unsigned integer data."],["Image3d","A 3d image used with a sampler."],["Image3dArray","An array of 3d images, used with a sampler."],["Image3dI","A 3d image used with a sampler, containing signed integer data."],["Image3dIArray","An array of 3d images, used with a sampler, each containing signed integer data."],["Image3dU","A 3d image used with a sampler, containing unsigned integer data."],["Image3dUArray","An array of 3d images, used with a sampler, each containing unsigned integer data."],["StorageImage1d","A 1d storage image, directly accessed, without using a sampler."],["StorageImage1dI","A 1d storage image, directly accessed without a sampler, containing signed integer data."],["StorageImage1dU","A 1d storage image, directly accessed without a sampler, containing unsigned integer data."],["StorageImage2d","A 2d storage image, directly accessed, without using a sampler."],["StorageImage2dI","A 2d storage image, directly accessed without a sampler, containing signed integer data."],["StorageImage2dU","A 2d storage image, directly accessed without a sampler, containing unsigned integer data."],["StorageImage3d","A 3d storage image, directly accessed, without using a sampler."],["StorageImage3dI","A 3d storage image, directly accessed without a sampler, containing signed integer data."],["StorageImage3dU","A 3d storage image, directly accessed without a sampler, containing unsigned integer data."]]};