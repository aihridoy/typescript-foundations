const formatCoordinate = (coordinate: readonly [latitude: number, longitude: number, locationName: string]): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const res = formatCoordinate([23.81, 90.41, "Dhaka"]);
console.log(res);