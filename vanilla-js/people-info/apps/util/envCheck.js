export const envStatusChecking = (mountFun, tagId) => {

    console.log({ tagId });

    if (process.env.NODE_ENV === 'development') {
        const element = document.getElementById(tagId);

        if (element) {
            // We are probably running in isolation
            mountFun(element);
        }
    }
}