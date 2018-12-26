const jayson = require('jayson/promise');

// TODO: make this configurable and testable
const client = jayson.client.http({
    headers: {
        'Content-Type': 'application/json'
    },
    port: 3030
});

exports.createRandomAccount = async function() {
    console.log("This is a message from createRA2");
    await viewAccount();
};

// Helper to view account
exports.viewAccount = async function() {
    return await viewAccount();
};

const viewAccount = async function() {
    console.log("sending");
    /*eturn checkError(await client.request('view_account', [{
        account_id: "3x9az88Dkbxa6tkKByxqEn7jBTJCJCD4dVvou49L24ET",
        method_name: '',
        args: []
    }])).result;*/
    return 1;
}

const checkError = (response) => {
    if (response.error) {
        console.log("problem " + response.error);
       // throw createError(400, `[${response.error.code}] ${response.error.message}: ${response.error.data}`);
    }
    console.log("returned");
    return response;
};
