module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const products = [{
        id: 1,
        name: 'Book'
    },
    {
        id: 2,
        name: 'Movie'
    }]

    context.res = {
        // status: 200, /* Defaults to 200 */
        headers : {
            'Content-Type': 'application/json'
        },
        body: products
    };
}