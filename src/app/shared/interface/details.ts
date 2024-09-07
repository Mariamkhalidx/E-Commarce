
//product details intercce
export interface Details {
        sold: number
        images: string[]
        subcategory: Subcategory[]
        ratingsQuantity: number
        _id: string
        title: string
        slug: string
        description: string
        quantity: number
        price: number
        imageCover: string
        category: Category
        brand: Brand
        ratingsAverage: number
        createdAt: string
        updatedAt: string
        __v: number
        reviews: any[]
        id: string
      }
      
      export interface Subcategory {
        _id: string
        name: string
        slug: string
        category: string
      }
      
      export interface Category {
        _id: string
        name: string
        slug: string
        image: string
      }
      
      export interface Brand {
        _id: string
        name: string
        slug: string
        image: string
      }
      
//Category details intercce

      export interface CategoryDetails {
        _id: string
        name: string
        slug: string
        image: string
        createdAt: string
        updatedAt: string
        __v: number
      }

      //Brand details intercce
      export interface BrandDetails {
        _id: string
        name: string
        slug: string
        image: string
        createdAt: string
        updatedAt: string
        __v: number
      }
      