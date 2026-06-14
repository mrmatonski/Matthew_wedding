import featuredPhoto from '../ASSETS/Site_photo.jpeg';
import rehearsal001 from '../ASSETS/rehearsal/IMG_0402 2.jpeg';
import rehearsal002 from '../ASSETS/rehearsal/IMG_0402.jpeg';
import rehearsal003 from '../ASSETS/rehearsal/IMG_0403 2.jpeg';
import rehearsal004 from '../ASSETS/rehearsal/IMG_0403.jpeg';
import rehearsal005 from '../ASSETS/rehearsal/IMG_0404 2.jpeg';
import rehearsal006 from '../ASSETS/rehearsal/IMG_0404.jpeg';
import rehearsal007 from '../ASSETS/rehearsal/IMG_0405 2.jpeg';
import rehearsal008 from '../ASSETS/rehearsal/IMG_0405.jpeg';
import rehearsal009 from '../ASSETS/rehearsal/IMG_0406 2.jpeg';
import rehearsal010 from '../ASSETS/rehearsal/IMG_0406.jpeg';
import rehearsal011 from '../ASSETS/rehearsal/IMG_0407 2.jpeg';
import rehearsal012 from '../ASSETS/rehearsal/IMG_0407.jpeg';
import rehearsal013 from '../ASSETS/rehearsal/IMG_0408 2.jpeg';
import rehearsal014 from '../ASSETS/rehearsal/IMG_0408.jpeg';
import rehearsal015 from '../ASSETS/rehearsal/IMG_0409 2.jpeg';
import rehearsal016 from '../ASSETS/rehearsal/IMG_0409.jpeg';
import rehearsal017 from '../ASSETS/rehearsal/IMG_0410 2.jpeg';
import rehearsal018 from '../ASSETS/rehearsal/IMG_0410.jpeg';
import rehearsal019 from '../ASSETS/rehearsal/IMG_0411 2.jpeg';
import rehearsal020 from '../ASSETS/rehearsal/IMG_0411.jpeg';
import rehearsal021 from '../ASSETS/rehearsal/IMG_0412 2.jpeg';
import rehearsal022 from '../ASSETS/rehearsal/IMG_0412.jpeg';
import rehearsal023 from '../ASSETS/rehearsal/IMG_0413 2.jpeg';
import rehearsal024 from '../ASSETS/rehearsal/IMG_0413.jpeg';
import rehearsal025 from '../ASSETS/rehearsal/IMG_0414 2.jpeg';
import rehearsal026 from '../ASSETS/rehearsal/IMG_0414.jpeg';
import rehearsal027 from '../ASSETS/rehearsal/IMG_0415 2.jpeg';
import rehearsal028 from '../ASSETS/rehearsal/IMG_0415.jpeg';
import rehearsal029 from '../ASSETS/rehearsal/IMG_0416 2.jpeg';
import rehearsal030 from '../ASSETS/rehearsal/IMG_0416.jpeg';
import rehearsal031 from '../ASSETS/rehearsal/IMG_0417 2.jpeg';
import rehearsal032 from '../ASSETS/rehearsal/IMG_0417.jpeg';
import rehearsal033 from '../ASSETS/rehearsal/IMG_0418 2.jpeg';
import rehearsal034 from '../ASSETS/rehearsal/IMG_0418.jpeg';
import rehearsal035 from '../ASSETS/rehearsal/IMG_0419 2.jpeg';
import rehearsal036 from '../ASSETS/rehearsal/IMG_0419.jpeg';
import rehearsal037 from '../ASSETS/rehearsal/IMG_0420 2.jpeg';
import rehearsal038 from '../ASSETS/rehearsal/IMG_0420.jpeg';
import rehearsal039 from '../ASSETS/rehearsal/IMG_0421 2.jpeg';
import rehearsal040 from '../ASSETS/rehearsal/IMG_0421.jpeg';
import rehearsal041 from '../ASSETS/rehearsal/IMG_0422.jpeg';
import rehearsal042 from '../ASSETS/rehearsal/IMG_0423.jpeg';
import rehearsal043 from '../ASSETS/rehearsal/IMG_0424.jpeg';
import rehearsal044 from '../ASSETS/rehearsal/IMG_0425.jpeg';
import rehearsal045 from '../ASSETS/rehearsal/IMG_0426.jpeg';
import rehearsal046 from '../ASSETS/rehearsal/IMG_0427.jpeg';
import rehearsal047 from '../ASSETS/rehearsal/IMG_0428.jpeg';
import rehearsal048 from '../ASSETS/rehearsal/IMG_0429.jpeg';
import rehearsal049 from '../ASSETS/rehearsal/IMG_0430.jpeg';
import rehearsal050 from '../ASSETS/rehearsal/IMG_0431.jpeg';

const rehearsalImages = [
    rehearsal001,
    rehearsal002,
    rehearsal003,
    rehearsal004,
    rehearsal005,
    rehearsal006,
    rehearsal007,
    rehearsal008,
    rehearsal009,
    rehearsal010,
    rehearsal011,
    rehearsal012,
    rehearsal013,
    rehearsal014,
    rehearsal015,
    rehearsal016,
    rehearsal017,
    rehearsal018,
    rehearsal019,
    rehearsal020,
    rehearsal021,
    rehearsal022,
    rehearsal023,
    rehearsal024,
    rehearsal025,
    rehearsal026,
    rehearsal027,
    rehearsal028,
    rehearsal029,
    rehearsal030,
    rehearsal031,
    rehearsal032,
    rehearsal033,
    rehearsal034,
    rehearsal035,
    rehearsal036,
    rehearsal037,
    rehearsal038,
    rehearsal039,
    rehearsal040,
    rehearsal041,
    rehearsal042,
    rehearsal043,
    rehearsal044,
    rehearsal045,
    rehearsal046,
    rehearsal047,
    rehearsal048,
    rehearsal049,
    rehearsal050,
];

const rehearsalPhotos = rehearsalImages.map((src, index) => ({
    src,
    title: `Rehearsal Moment ${index + 1}`,
    category: index < 6 ? 'Featured rehearsal' : 'Rehearsal',
    alt: `Wedding rehearsal moment ${index + 1}`,
    filename: `matthew-wedding-rehearsal-${String(index + 1).padStart(2, '0')}.jpeg`,
}));

const galleryPhotos = [
    {
        src: featuredPhoto,
        title: 'Just Married',
        category: 'Featured',
        alt: 'Wedding couple celebrating together',
        filename: 'matthew-wedding-just-married.jpeg',
    },
    {
        src: rehearsalPhotos[0]?.src,
        title: 'Rehearsal Smiles',
        category: 'Rehearsal',
        alt: 'Wedding rehearsal smiles',
        filename: 'matthew-wedding-rehearsal-smiles.jpeg',
    },
    {
        src: rehearsalPhotos[1]?.src,
        title: 'Family Warmup',
        category: 'Rehearsal',
        alt: 'Family gathering at wedding rehearsal',
        filename: 'matthew-wedding-family-warmup.jpeg',
    },
    {
        src: rehearsalPhotos[2]?.src,
        title: 'Before the Ceremony',
        category: 'Rehearsal',
        alt: 'Wedding rehearsal before the ceremony',
        filename: 'matthew-wedding-before-ceremony.jpeg',
    },
    {
        src: rehearsalPhotos[3]?.src,
        title: 'Spring Details',
        category: 'Rehearsal',
        alt: 'Spring wedding rehearsal detail',
        filename: 'matthew-wedding-spring-details.jpeg',
    },
    {
        src: rehearsalPhotos[4]?.src,
        title: 'Everyone Together',
        category: 'Rehearsal',
        alt: 'Wedding rehearsal group moment',
        filename: 'matthew-wedding-everyone-together.jpeg',
    },
];

function Gallery() {
    return (
        <section className="gallery-section" id="gallery">
            <div className="section-heading">
                <p className="section-kicker">Photo gallery</p>
                <h2>Ready for today&apos;s memories</h2>
                <p>
                    A curated start with the wedding day hero and the first rehearsal
                    moments placed into polished feature cards.
                </p>
            </div>
            <div className="gallery-grid">
                {galleryPhotos.filter((photo) => photo.src).map((photo) => (
                    <article className={`gallery-card${photo.src ? '' : ' gallery-card--empty'}`} key={photo.title}>
                        <img src={photo.src} alt={photo.alt} />
                        <a
                            className="photo-download"
                            href={photo.src}
                            download={photo.filename}
                            aria-label={`Download ${photo.title}`}
                        >
                            Download
                        </a>
                        <div className="gallery-card__caption">
                            <span>{photo.category}</span>
                            <h3>{photo.title}</h3>
                        </div>
                    </article>
                ))}
            </div>
            <section className="rehearsal-section" id="rehearsal">
                <div className="section-heading section-heading--center">
                    <p className="section-kicker">Rehearsal gallery</p>
                    <h2>The night before</h2>
                    <p>
                        All rehearsal photos from your Desktop folder are now arranged in
                        a responsive editorial mosaic.
                    </p>
                </div>
                <div className="rehearsal-mosaic">
                    {rehearsalPhotos.map((photo, index) => (
                        <article className="rehearsal-card" key={photo.title}>
                            <img src={photo.src} alt={photo.alt} loading={index > 8 ? 'lazy' : 'eager'} />
                            <a
                                className="photo-download photo-download--rehearsal"
                                href={photo.src}
                                download={photo.filename}
                                aria-label={`Download ${photo.title}`}
                            >
                                Download
                            </a>
                            <div className="rehearsal-card__overlay">
                                <span>{photo.category}</span>
                                <h3>{photo.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Gallery;
