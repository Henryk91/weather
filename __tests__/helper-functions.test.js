import { getTime, convertIconName } from '../src/client/views/Helpers/helper-functions';


describe('Convert Api data time', () => {
    it('Should convert time', () => {

        expect(getTime(1552054251000)).toBe("22:50");
    });
});

describe('Convert Api icon name for render ', () => {
    it('Should change to upper', () => {
        expect(convertIconName("fog")).toBe("FOG");
    });
    it('Should change to upper with underscore', () => {
        expect(convertIconName("partly-cloudy-night")).toBe("PARTLY_CLOUDY_NIGHT");
    });
});
