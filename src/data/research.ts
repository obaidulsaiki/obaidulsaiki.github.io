export interface ResearchPublication {
  id: string;
  title: string;
  venue: string;
  year: number;
  status: 'Published' | 'Accepted' | 'Minor Revision' | 'Presented' | 'Under Review';
  authorPosition: '1st Author' | '2nd Author' | '3rd Author' | 'Co-Author';
  authors: string;
  doi?: string;
  url?: string;
  category: 'Computer Vision & Medical Imaging' | 'Biomedical Signal Processing' | 'NLP & Bengali AI' | 'Clinical AI';
  impactBadge?: string;
  abstract: string;
  contributions: string[];
  tags: string[];
  bibtex: string;
}

export const highlightedPapers: ResearchPublication[] = [
  {
    id: 'obais-mamba-ldct-2026',
    title: 'OBAIS-Mamba: Kernel-Invariant Anatomical State Learning for Dose-Robust Low-Dose CT Reconstruction',
    venue: 'ACM International Conference on Computing Advancements (ICCA), 2026',
    year: 2026,
    status: 'Accepted',
    authorPosition: '1st Author',
    authors: 'Obaidul Haque, et al.',
    category: 'Computer Vision & Medical Imaging',
    impactBadge: 'ACM ICCA 2026 · 1st Author',
    abstract:
      'Proposes a novel state-space model (SSM) architecture, OBAIS-Mamba, engineered to overcome quantum noise and severe streak artifacts in Low-Dose Computed Tomography (LDCT). By formulating a kernel-invariant continuous state-space formulation, the model learns anatomical continuity across slices while preserving delicate lesion edges without over-smoothing.',
    contributions: [
      'Engineered kernel-invariant state transitions achieving higher Peak Signal-to-Noise Ratio (PSNR) under 10% radiation dosage.',
      'Formulated frequency-guided structural preservation loss reducing structural blurring in fine pulmonary nodules.',
      'Demonstrated 2.4x inference speedup over standard 3D diffusion reconstruction baselines on clinical thoracic scans.',
    ],
    tags: ['Mamba', 'State-Space Models (SSM)', 'Low-Dose CT', 'Medical Imaging', 'PyTorch'],
    bibtex: `@inproceedings{haque2026obaismamba,
  title={OBAIS-Mamba: Kernel-Invariant Anatomical State Learning for Dose-Robust Low-Dose CT Reconstruction},
  author={Haque, Obaidul and others},
  booktitle={ACM International Conference on Computing Advancements (ICCA)},
  year={2026},
  publisher={ACM}
}`,
  },
  {
    id: 'stroke-prediction-bmd-springer-2025',
    title: 'Stroke Prediction Using Ensemble Machine and Deep Learning Models',
    venue: 'Biomedical Materials & Devices (BMD), Springer Nature, 2025',
    year: 2025,
    status: 'Published',
    authorPosition: '3rd Author',
    authors:
      'Md. Samiul Alom, Rajib Kumar Halder, Obaidul Haque, Saikat Kumar Gain, Md. Alamin Talukder, Fahim Shakil Tamim, Nusrat Jahan, Tamanna Tabassum, Fatema Akter, Faisal Imran, Rakib Hossen',
    doi: '10.1007/s44174-025-00521-z',
    url: 'https://doi.org/10.1007/s44174-025-00521-z',
    category: 'Clinical AI',
    impactBadge: 'Springer Nature Q1 (IF: 6.71) · Published',
    abstract:
      'Comprehensive epidemiological and clinical study benchmarking stacking ensemble classifiers, gradient boosting algorithms, and deep neural networks to predict cerebrovascular stroke risk factors across heterogeneous demographic cohorts.',
    contributions: [
      'Benchmarked ensemble stacking models against imbalanced clinical patient datasets.',
      'Identified primary multi-factorial hypertension, glucose, and cardiovascular risk indicators.',
      'Published in Springer Nature Biomedical Materials and Devices with peer-reviewed open access.',
    ],
    tags: ['Stroke Prediction', 'Clinical ML', 'Ensemble Stacking', 'Springer Nature Q1', 'Published DOI'],
    bibtex: `@article{alom2025stroke,
  title={Stroke Prediction Using Ensemble Machine and Deep Learning Models},
  author={Alom, Md. Samiul and Halder, Rajib Kumar and Haque, Obaidul and Gain, Saikat Kumar and Talukder, Md. Alamin and Tamim, Fahim Shakil and Jahan, Nusrat and Tabassum, Tamanna and Akter, Fatema and Imran, Faisal and Hossen, Rakib},
  journal={Biomedical Materials and Devices},
  year={2025},
  publisher={Springer Nature},
  doi={10.1007/s44174-025-00521-z}
}`,
  },
  {
    id: 'ecg-arrhythmia-spicscon-2026',
    title: 'An Interpretable Dual-Lead CNN-Transformer Hybrid Framework for ECG Arrhythmia Classification with Gradient-Based Explainability',
    venue: 'IEEE SPICSCON, 2026',
    year: 2026,
    status: 'Accepted',
    authorPosition: '1st Author',
    authors: 'Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Md. Abdur Rahim, Rafat Ara, Mariha Tabassum',
    category: 'Biomedical Signal Processing',
    impactBadge: 'IEEE SPICSCON 2026 · 1st Author',
    abstract:
      'Presents a hybrid architecture fusing convolutional local receptive fields with multi-head self-attention transformers for dual-lead electrocardiogram (ECG) arrhythmia categorization. Incorporates gradient-weighted class activation mapping (Grad-CAM) to visualize P-Q-R-S-T morphological anomalies.',
    contributions: [
      'Dual-lead cross-channel attention mechanism isolating subtle cardiac conduction delays.',
      'Gradient-based saliency mapping providing cardiologists with explainable, beat-by-beat attribution heatmaps.',
      'Rigorous evaluation on MIT-BIH and standard clinical arrhythmia databases demonstrating high specificity.',
    ],
    tags: ['ECG Signal Processing', 'Vision Transformers', 'Explainable AI (XAI)', 'Grad-CAM', 'IEEE'],
    bibtex: `@inproceedings{haque2026ecgarrhythmia,
  title={An Interpretable Dual-Lead CNN-Transformer Hybrid Framework for ECG Arrhythmia Classification with Gradient-Based Explainability},
  author={Haque, Obaidul and Jibon, Ferdaus Anam and Rakib, Abu Bakar and Rahim, Md. Abdur and Ara, Rafat and Tabassum, Mariha},
  booktitle={IEEE SPICSCON},
  year={2026},
  organization={IEEE}
}`,
  },
  {
    id: 'alzheimers-mri-springer-2026',
    title: 'Automated Classification of Alzheimer’s Disease Stages from Brain MRI',
    venue: 'Discover Neuroscience, Springer Nature, 2026',
    year: 2026,
    status: 'Minor Revision',
    authorPosition: '1st Author',
    authors: 'Obaidul Haque, Ferdaus Anam Jibon, Utpal Kanti Das, A. H. M. Kamal, Gahangir Hossain',
    category: 'Computer Vision & Medical Imaging',
    impactBadge: 'Springer Nature (Q2, IF: 4.0) · 1st Author',
    abstract:
      'Investigates deep neural networks with spatial-temporal attention mechanisms for four-stage classification of Alzheimer\'s Disease progression (Non-Demented, Very Mild, Mild, and Moderate Cognitive Impairment) from structural magnetic resonance imaging (sMRI) volumes.',
    contributions: [
      'Designed an attention-guided feature extractor highlighting hippocampal and ventricular morphological volume shifts.',
      'Achieved robust multi-class accuracy across public multi-center neuroimaging datasets (ADNI / OASIS).',
      'Provided patient-level cross-validation preventing data leakage between anatomical scan slices.',
    ],
    tags: ['Brain MRI', 'Alzheimer\'s Stage Detection', 'Neuroimaging', 'Springer Nature Q2', 'PyTorch'],
    bibtex: `@article{haque2026alzheimers,
  title={Automated Classification of Alzheimer’s Disease Stages from Brain MRI},
  author={Haque, Obaidul and Jibon, Ferdaus Anam and Das, Utpal Kanti and Kamal, A. H. M. and Hossain, Gahangir},
  journal={Discover Neuroscience},
  publisher={Springer Nature},
  year={2026}
}`,
  },
  {
    id: 'efficientmswin-malaria-iconnect-2026',
    title: 'EfficientMSwin: A YOLO-Guided Multi-Scale Swin Transformer for Fine-Grained Malaria Cell Stage Classification',
    venue: 'International Conference on Electronics, Communications and Information Technology (ICONNECT), 2026',
    year: 2026,
    status: 'Presented',
    authorPosition: '1st Author',
    authors: 'Obaidul Haque, Mariha Tabassum, Ferdaus Anam Jibon, Tania Akter Setu, Shah Mostofa Tariquzzaman',
    category: 'Computer Vision & Medical Imaging',
    impactBadge: 'ICONNECT 2026 · 1st Author',
    abstract:
      'A two-stage computer vision diagnostic pipeline integrating a streamlined YOLO detector for red blood cell localization with a hierarchical Multi-Scale Swin Transformer (MSwin) for fine-grained morphological stage classification of Plasmodium falciparum in microscopic blood smears.',
    contributions: [
      'Two-stage cascade decoupling cell localization from fine-grained parasite stage identification.',
      'Shifted-window attention mechanism capturing subtle intra-cellular chromatin and ring-stage variations.',
      'High diagnostic sensitivity verified against stained thin blood smear microscopic imagery.',
    ],
    tags: ['Swin Transformer', 'YOLO', 'Malaria Diagnostics', 'Microscopy Analysis', 'Computer Vision'],
    bibtex: `@inproceedings{haque2026efficientmswin,
  title={EfficientMSwin: A YOLO-Guided Multi-Scale Swin Transformer for Fine-Grained Malaria Cell Stage Classification},
  author={Haque, Obaidul and Tabassum, Mariha and Jibon, Ferdaus Anam and Setu, Tania Akter and Tariquzzaman, Shah Mostofa},
  booktitle={International Conference on Electronics, Communications and Information Technology (ICONNECT)},
  year={2026}
}`,
  },
];

export const publicationOverviewStats = {
  totalPapers: '40+',
  firstAuthorCount: '15+',
  publishedCount: '11',
  presentedCount: '14',
  underReviewCount: '17',
  venues: 'ACM, IEEE, Springer Nature',
};
