export default{
    name : 'product',
    tittle : 'Product',
    type : 'document',
    fields : [
        {
            name : 'image',
            tittle  : 'Image',
            type : 'array',
            of : [{type : 'image'}],
            options : {
                hotspot : true,
            }
        },
        { 
            name: 'name',
            title: 'Name',
            type: 'string',
          },
        {
            name : 'slug',
            tittle : 'Slug',
            type : 'slug',
            options : {
                source : 'name',
                maxlength : 90,
            }
        },
        {
            name : 'price',
            tittle : 'Price',
            type :'number',
        },
        {
            name :'details',
            tittle: 'Details',
            type : 'string',
        }
    ]
}