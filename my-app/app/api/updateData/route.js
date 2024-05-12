
import { data } from 'browserslist';
import fs from 'fs';
import path from 'path';

export async function PATCH(req, res) {

    const { id } = await req.json();

    // Read the data from the fakeData file
    const filePath = path.join(process.cwd(), 'public', 'fakeData.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Update the active property
    const index = data.findIndex((item) => item.id === id);
    data[index].active = !data[index].active;

    // Write the updated data back
    fs.writeFileSync(filePath, JSON.stringify(data));
    return new Response(JSON.stringify({ message: 'isActive updated successfully', data: data[index] }), { status: 200, })
}

export async function POST(req, res) {
    const { name, active, id, imageUrl } = await req.json();

    const filePath = path.join(process.cwd(), 'public', 'fakeData.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    data.unshift({ name: name, active: active, id: `${id}`, imageUrl: imageUrl })
    fs.writeFileSync(filePath, JSON.stringify(data));
    return new Response(JSON.stringify({ message: 'data added succefully', data: data.slice(-1) }), { status: 200, })
}