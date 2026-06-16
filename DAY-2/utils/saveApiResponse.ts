import fs from 'fs';
import path from 'path';

export function saveApiResponse(
    fileName: string,
    responseBody: string
) {

    const apiDir = path.resolve(
        process.cwd(),
        'screenshots/api'
    );

    if (!fs.existsSync(apiDir)) {
        fs.mkdirSync(
            apiDir,
            { recursive: true }
        );
    }

    const filePath = path.join(
        apiDir,
        `${fileName}.xml`
    );

    fs.writeFileSync(
        filePath,
        responseBody
    );

    console.log(
        'API Response Saved:',
        filePath
    );
}