declare module 'customTypes' {
    type YoutubeData = {
        credentals: {
            key: string,
            channelId: string,
            results: number
        };
    };

    interface YoutubeProps {
        Youtube: YoutubeData,
    }
}

module.exports = {
    YoutubeData,
    YoutubeProps
};