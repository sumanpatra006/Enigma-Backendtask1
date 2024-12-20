const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the HTML file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    else if (url === '/text') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a simple text response.');
    }

    else if (url === '/html') {
        const filePath = path.join(__dirname, 'another.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the HTML file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    else if (url === '/image') {
        const imgPath = path.join(__dirname, "assets", 'image.png');
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the image file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });
    }

    else if (url === '/audio') {
        const audioPath = path.join(__dirname, "assets", 'audio.mp3');
        fs.readFile(audioPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the audio file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
                res.end(data);
            }
        });
    }

    else if (url === '/video') {
        const videoPath = path.join(__dirname, "assets", 'video.mp4');
        fs.readFile(videoPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the video file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'video/mp4' });
                res.end(data);
            }
        });
    }

    else if (url === '/pdf') {
        const pdfPath = path.join(__dirname, "assets", 'dummy.pdf');
        fs.readFile(pdfPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the PDF file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/pdf' });
                res.end(data);
            }
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found.');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
