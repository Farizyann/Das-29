export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactions;
    views: number;
    userId: number;
}

export interface IReactions {
    likes: number;
    dislikes: number;
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    thumbnail: string;
    images: string[];
}

export interface IDimensions {
    width: number;
    height: number;
    depth: number;
}

export interface IMeta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

export interface IReview {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}
export interface ICategory {
    slug: string,
    name: string
    url: string
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    phone: string,
    username: string,
    image: string
}