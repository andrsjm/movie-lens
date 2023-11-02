export const successGetResponse = (data, res) => {
    res.status(200).json({
        'Status': 200,
        'Data': data
    });
}

export const failedGetResponse = (res, err) => {
    res.status(400).json({
        'Status': 400,
        'Message': err
    });
}

export const successAddResponse = (res) => {
    res.status(200).json({
        'Status': 200,
    });
}

export const failedAddResponse = (res, err) => {
    res.status(400).json({
        'Status': 400,
        'Message': err
    });
}

export const successLoginResponse = (res, accessToken) => {
    res.cookie(
        "access-token", accessToken, {
            httpOnly:true
        }).status(200).json({
        'Status': 200,
        'AccessToken': accessToken,
    });
}

export const failedLoginResponse = (res) => {
    res.status(400).json({
        'Status': 400,
    });
}