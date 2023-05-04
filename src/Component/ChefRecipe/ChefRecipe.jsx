import React, { useRef } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { GrFavorite } from 'react-icons/Gr';
import { jsPDF } from 'jspdf';
import toast, { Toaster } from 'react-hot-toast';
import html2canvas from 'html2canvas';

const ChefRecipe = () => {

    const notify = () => toast('added to favoroit');
    
    const { id } = useParams()
    const chefData = useLoaderData();
    console.log(chefData[0]);
    const { } = chefData[0];

    const printRef = useRef();

    const handleDownloadPdf = async () => {
        console.log('clicked')
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };
    return (
        <div  ref={printRef}>
            chef recipe {id}
            <Link className='block bg-red-400 px-5 w-36 text-center text-white py-2 mt-5' to='/'>
                go home
            </Link>

            <div className='card shadow-lg w-60 mt-10 bg-yellow-200'>
                <p className='card-title '>
                    something  <button onClick={notify}>
                        <Toaster></Toaster>
                        <GrFavorite></GrFavorite>
                    </button>
                </p>
                <button className='btn mt-20' onClick={handleDownloadPdf} >dfdf</button>
            </div>
        </div>
    );
};

export default ChefRecipe;