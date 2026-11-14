export interface ResearchPublication {
  id: string;
  title: string;
  type: 'Journal' | 'Conference';
  venue: string;
  location?: string | null;
  publisher: 'IEEE' | 'ACM' | 'Springer Nature' | 'Elsevier' | 'Frontiers' | 'Wiley';
  level: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'A*' | 'A' | 'B' | 'C' | 'Unranked';
  qIf?: string | null;
  status: 'working' | 'submitted' | 'under review' | 'accepted' | 'presented' | 'published';
  year: number;
  authorPosition: '1st Author' | '2nd Author' | '3rd Author' | 'Co-Author';
  authors: string;
  authorList: string[];
  category:
    | 'Computer Vision & Medical Imaging'
    | 'Biomedical Signal Processing'
    | 'NLP & Bengali AI'
    | 'Clinical AI & Healthcare'
    | 'Agriculture & Environmental AI';
  abstract: string;
  contributions: string[];
  keywords: string[];
  tags: string[];
  impactBadge?: string | null;
  url?: string | null;
  doi?: string | null;
  pid?: string | null;
  codeUrl?: string | null;
  datasetUrl?: string | null;
  bibtex: string;
  apa: string;
  ieee: string;
}

export const researchPublications: ResearchPublication[] = [
  {
    "id": "stroke-prediction-using-ensemble-machine-and-2025-1",
    "title": "Stroke Prediction Using Ensemble Machine and Deep Learning Models",
    "type": "Journal",
    "venue": "Biomedical Materials and Devices (BMD)",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "Q1-6.71",
    "status": "published",
    "year": 2025,
    "authorPosition": "3rd Author",
    "authors": "Md. Samiul Alom, Rajib Kumar Halder, Obaidul Haque, Saikat Kumar Gain, Md. Alamin Talukder, Fahim Shakil Tamim, Nusrat Jahan, Tamanna Tabassum, Fatema Akter, Faisal Imran, Rakib Hossen",
    "authorList": [
      "Md. Samiul Alom",
      "Rajib Kumar Halder",
      "Obaidul Haque",
      "Saikat Kumar Gain",
      "Md. Alamin Talukder",
      "Fahim Shakil Tamim",
      "Nusrat Jahan",
      "Tamanna Tabassum",
      "Fatema Akter",
      "Faisal Imran",
      "Rakib Hossen"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "Springer Nature Q1-6.71",
    "abstract": "A comprehensive empirical and clinical investigation formulating Stroke Prediction Using Ensemble Machine and Deep Learning Models. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Stroke Prediction Using Ensemble Machine and Deep Learning Models computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Stroke Prediction",
      "Ensemble Stacking"
    ],
    "tags": [
      "Low-Dose CT",
      "Stroke Prediction",
      "Ensemble Stacking"
    ],
    "url": "https://link.springer.com/article/10.1007/s44174-025-00521-z",
    "doi": "10.1007/s44174-025-00521-z",
    "pid": null,
    "bibtex": "@article{alom2025stroke-p,\n  title={Stroke Prediction Using Ensemble Machine and Deep Learning Models},\n  author={Md. Samiul Alom and Rajib Kumar Halder and Obaidul Haque and Saikat Kumar Gain and Md. Alamin Talukder and Fahim Shakil Tamim and Nusrat Jahan and Tamanna Tabassum and Fatema Akter and Faisal Imran and Rakib Hossen},\n  journal={Biomedical Materials and Devices (BMD)},\n  year={2025},\n  publisher={Springer Nature}\n}",
    "apa": "Md. Samiul Alom, Rajib Kumar Halder, Obaidul Haque, Saikat Kumar Gain, Md. Alamin Talukder, Fahim Shakil Tamim, Nusrat Jahan, Tamanna Tabassum, Fatema Akter, Faisal Imran, Rakib Hossen (2025). Stroke Prediction Using Ensemble Machine and Deep Learning Models. Biomedical Materials and Devices (BMD).",
    "ieee": "Md. Samiul Alom, Rajib Kumar Halder, Obaidul Haque, Saikat Kumar Gain, Md. Alamin Talukder, Fahim Shakil Tamim, Nusrat Jahan, Tamanna Tabassum, Fatema Akter, Faisal Imran, Rakib Hossen, \"Stroke Prediction Using Ensemble Machine and Deep Learning Models,\" in Biomedical Materials and Devices (BMD), 2025."
  },
  {
    "id": "automated-classification-of-alzheimers-diseas-2026-2",
    "title": "Automated Classification of Alzheimer’s Disease Stages from Brain MRI",
    "type": "Journal",
    "venue": "Discover Neuroscience",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q2",
    "qIf": "Q2-4",
    "status": "under review",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Ferdaus Anam Jibon, Utpal Kanti Das, A. H. M. Kamal, Gahangir Hossain",
    "authorList": [
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Utpal Kanti Das",
      "A. H. M. Kamal",
      "Gahangir Hossain"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "Springer Nature Q2-4",
    "abstract": "A comprehensive empirical and clinical investigation formulating Automated Classification of Alzheimer’s Disease Stages from Brain MRI. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Automated Classification of Alzheimer’s Disease Stages from Brain MRI computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Brain MRI",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Brain MRI",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": "https://submission.springernature.com/submission-details/206af546-4eb9-4815-ac1e-99737f0407c1",
    "doi": null,
    "pid": null,
    "bibtex": "@article{haque2026automate,\n  title={Automated Classification of Alzheimer’s Disease Stages from Brain MRI},\n  author={Obaidul Haque and Ferdaus Anam Jibon and Utpal Kanti Das and A. H. M. Kamal and Gahangir Hossain},\n  journal={Discover Neuroscience},\n  year={2026},\n  publisher={Springer Nature}\n}",
    "apa": "Obaidul Haque, Ferdaus Anam Jibon, Utpal Kanti Das, A. H. M. Kamal, Gahangir Hossain (2026). Automated Classification of Alzheimer’s Disease Stages from Brain MRI. Discover Neuroscience.",
    "ieee": "Obaidul Haque, Ferdaus Anam Jibon, Utpal Kanti Das, A. H. M. Kamal, Gahangir Hossain, \"Automated Classification of Alzheimer’s Disease Stages from Brain MRI,\" in Discover Neuroscience, 2026."
  },
  {
    "id": "medhipp-net-a-lightweight-attention-enhanced-2026-3",
    "title": "MedHipp-Net: A Lightweight Attention-Enhanced 3D Network and Cross-Architecture Benchmark for Anterior and Posterior Hippocampus Segmentation with External Validation",
    "type": "Journal",
    "venue": "Peer-Reviewed Journal",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "TQ1",
    "status": "submitted",
    "year": 2026,
    "authorPosition": "Co-Author",
    "authors": "Anay Kumer Ghosh, Ehetisum Sharif, Ferdaus Anam Jibon, Obaidul Haque",
    "authorList": [
      "Anay Kumer Ghosh",
      "Ehetisum Sharif",
      "Ferdaus Anam Jibon",
      "Obaidul Haque"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "Springer Nature TQ1",
    "abstract": "A comprehensive empirical and clinical investigation formulating MedHipp-Net. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core MedHipp-Net computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{ghosh2026medhipp-,\n  title={MedHipp-Net: A Lightweight Attention-Enhanced 3D Network and Cross-Architecture Benchmark for Anterior and Posterior Hippocampus Segmentation with External Validation},\n  author={Anay Kumer Ghosh and Ehetisum Sharif and Ferdaus Anam Jibon and Obaidul Haque},\n  journal={Peer-Reviewed Journal},\n  year={2026},\n  publisher={Springer Nature}\n}",
    "apa": "Anay Kumer Ghosh, Ehetisum Sharif, Ferdaus Anam Jibon, Obaidul Haque (2026). MedHipp-Net: A Lightweight Attention-Enhanced 3D Network and Cross-Architecture Benchmark for Anterior and Posterior Hippocampus Segmentation with External Validation. Peer-Reviewed Journal.",
    "ieee": "Anay Kumer Ghosh, Ehetisum Sharif, Ferdaus Anam Jibon, Obaidul Haque, \"MedHipp-Net: A Lightweight Attention-Enhanced 3D Network and Cross-Architecture Benchmark for Anterior and Posterior Hippocampus Segmentation with External Validation,\" in Peer-Reviewed Journal, 2026."
  },
  {
    "id": "medtrimambakan-a-tri-pathway-network-for-brai-2026-4",
    "title": "MedTriMambaKAN: A Tri-Pathway Network for Brain Tumor MRI Classification Evaluated Under Patient-Level Partitioning, External Validation, and Attribution Analysis",
    "type": "Journal",
    "venue": "Journal of Neuroscience Methods",
    "location": null,
    "publisher": "Elsevier",
    "level": "Q1",
    "qIf": "Q1-3",
    "status": "working",
    "year": 2026,
    "authorPosition": "Co-Author",
    "authors": "Farhan Shahriar, Raufu Umme Rhidi, Ferdaus Anam Jibon, Obaidul Haque",
    "authorList": [
      "Farhan Shahriar",
      "Raufu Umme Rhidi",
      "Ferdaus Anam Jibon",
      "Obaidul Haque"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "Elsevier Q1-3",
    "abstract": "Investigates linear-time state-space architectures (Mamba) applied to MedTriMambaKAN, achieving continuous state transitions and robust contextual representations under noisy domain conditions while maintaining superior computational efficiency over quadratic self-attention baselines.",
    "contributions": [
      "Designed and formulated the core MedTriMambaKAN computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Mamba SSM",
      "Brain MRI",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Mamba SSM",
      "Brain MRI",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{shahriar2026medtrima,\n  title={MedTriMambaKAN: A Tri-Pathway Network for Brain Tumor MRI Classification Evaluated Under Patient-Level Partitioning, External Validation, and Attribution Analysis},\n  author={Farhan Shahriar and Raufu Umme Rhidi and Ferdaus Anam Jibon and Obaidul Haque},\n  journal={Journal of Neuroscience Methods},\n  year={2026},\n  publisher={Elsevier}\n}",
    "apa": "Farhan Shahriar, Raufu Umme Rhidi, Ferdaus Anam Jibon, Obaidul Haque (2026). MedTriMambaKAN: A Tri-Pathway Network for Brain Tumor MRI Classification Evaluated Under Patient-Level Partitioning, External Validation, and Attribution Analysis. Journal of Neuroscience Methods.",
    "ieee": "Farhan Shahriar, Raufu Umme Rhidi, Ferdaus Anam Jibon, Obaidul Haque, \"MedTriMambaKAN: A Tri-Pathway Network for Brain Tumor MRI Classification Evaluated Under Patient-Level Partitioning, External Validation, and Attribution Analysis,\" in Journal of Neuroscience Methods, 2026."
  },
  {
    "id": "paddynetv4l-entropy-guided-frequency-attentio-2026-5",
    "title": "PaddyNetV4L: Entropy-Guided Frequency Attention and Adaptive Regularization for Robust Paddy Leaf Disease Diagnosis",
    "type": "Journal",
    "venue": "Peer-Reviewed Journal",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "TQ1",
    "status": "working",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque",
    "authorList": [
      "Obaidul Haque"
    ],
    "category": "Agriculture & Environmental AI",
    "impactBadge": "Springer Nature TQ1",
    "abstract": "Proposes a robust computer vision and pattern recognition pipeline for PaddyNetV4L. Integrates adaptive frequency regularization and multi-scale visual feature fusion to deliver accurate, field-deployable diagnostics under variable illumination and environmental noise.",
    "contributions": [
      "Designed and formulated the core PaddyNetV4L computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Agricultural Diagnostics",
      "Precision Agriculture",
      "Computer Vision",
      "Pattern Recognition"
    ],
    "tags": [
      "Agricultural Diagnostics",
      "Precision Agriculture",
      "Computer Vision",
      "Pattern Recognition"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{haque2026paddynet,\n  title={PaddyNetV4L: Entropy-Guided Frequency Attention and Adaptive Regularization for Robust Paddy Leaf Disease Diagnosis},\n  author={Obaidul Haque},\n  journal={Peer-Reviewed Journal},\n  year={2026},\n  publisher={Springer Nature}\n}",
    "apa": "Obaidul Haque (2026). PaddyNetV4L: Entropy-Guided Frequency Attention and Adaptive Regularization for Robust Paddy Leaf Disease Diagnosis. Peer-Reviewed Journal.",
    "ieee": "Obaidul Haque, \"PaddyNetV4L: Entropy-Guided Frequency Attention and Adaptive Regularization for Robust Paddy Leaf Disease Diagnosis,\" in Peer-Reviewed Journal, 2026."
  },
  {
    "id": "a-gan-augmented-attention-based-framework-for-2026-6",
    "title": "A GAN-Augmented Attention-Based Framework for Robust, Interpretable, and Well-Calibrated Banana leaf Disease Classification",
    "type": "Journal",
    "venue": "Peer-Reviewed Journal",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "TQ1",
    "status": "working",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque",
    "authorList": [
      "Obaidul Haque"
    ],
    "category": "Agriculture & Environmental AI",
    "impactBadge": "Springer Nature TQ1",
    "abstract": "Proposes a robust computer vision and pattern recognition pipeline for A GAN-Augmented Attention-Based Framework for Robust, Interpretable, and Well-Calibrated Banana leaf Disease Classification. Integrates adaptive frequency regularization and multi-scale visual feature fusion to deliver accurate, field-deployable diagnostics under variable illumination and environmental noise.",
    "contributions": [
      "Designed and formulated the core A GAN-Augmented Attention-Based Framework for Robust, Interpretable, and Well-Calibrated Banana leaf Disease Classification computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Agricultural Diagnostics",
      "Precision Agriculture",
      "Computer Vision",
      "Pattern Recognition"
    ],
    "tags": [
      "Agricultural Diagnostics",
      "Precision Agriculture",
      "Computer Vision",
      "Pattern Recognition"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{haque2026a-gan-au,\n  title={A GAN-Augmented Attention-Based Framework for Robust, Interpretable, and Well-Calibrated Banana leaf Disease Classification},\n  author={Obaidul Haque},\n  journal={Peer-Reviewed Journal},\n  year={2026},\n  publisher={Springer Nature}\n}",
    "apa": "Obaidul Haque (2026). A GAN-Augmented Attention-Based Framework for Robust, Interpretable, and Well-Calibrated Banana leaf Disease Classification. Peer-Reviewed Journal.",
    "ieee": "Obaidul Haque, \"A GAN-Augmented Attention-Based Framework for Robust, Interpretable, and Well-Calibrated Banana leaf Disease Classification,\" in Peer-Reviewed Journal, 2026."
  },
  {
    "id": "aspect-based-abusive-sentence-detection-in-ba-2026-7",
    "title": "Aspect-Based Abusive Sentence Detection in Bangla Using Transformer and Hybrid Deep Neural Architectures",
    "type": "Journal",
    "venue": "Peer-Reviewed Journal",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "TQ1",
    "status": "working",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque",
    "authorList": [
      "Obaidul Haque"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "Springer Nature TQ1",
    "abstract": "Addresses low-resource linguistic challenges through Aspect-Based Abusive Sentence Detection in Bangla Using Transformer and Hybrid Deep Neural Architectures. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core Aspect-Based Abusive Sentence Detection in Bangla Using Transformer and Hybrid Deep Neural Architectures computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Transformers",
      "Bengali NLP"
    ],
    "tags": [
      "Low-Dose CT",
      "Transformers",
      "Bengali NLP"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{haque2026aspect-b,\n  title={Aspect-Based Abusive Sentence Detection in Bangla Using Transformer and Hybrid Deep Neural Architectures},\n  author={Obaidul Haque},\n  journal={Peer-Reviewed Journal},\n  year={2026},\n  publisher={Springer Nature}\n}",
    "apa": "Obaidul Haque (2026). Aspect-Based Abusive Sentence Detection in Bangla Using Transformer and Hybrid Deep Neural Architectures. Peer-Reviewed Journal.",
    "ieee": "Obaidul Haque, \"Aspect-Based Abusive Sentence Detection in Bangla Using Transformer and Hybrid Deep Neural Architectures,\" in Peer-Reviewed Journal, 2026."
  },
  {
    "id": "explainable-machine-learning-and-unsupervised-2026-8",
    "title": "Explainable Machine Learning and Unsupervised Knowledge Discovery for University Student Depression Risk Assessment and Decision Support",
    "type": "Journal",
    "venue": "Peer-Reviewed Journal",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "TQ1",
    "status": "working",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque",
    "authorList": [
      "Obaidul Haque"
    ],
    "category": "Clinical AI & Healthcare",
    "impactBadge": "Springer Nature TQ1",
    "abstract": "A comprehensive empirical and clinical investigation formulating Explainable Machine Learning and Unsupervised Knowledge Discovery for University Student Depression Risk Assessment and Decision Support. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Explainable Machine Learning and Unsupervised Knowledge Discovery for University Student Depression Risk Assessment and Decision Support computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Explainable AI (XAI)",
      "Clinical AI",
      "Predictive Modeling",
      "Machine Learning"
    ],
    "tags": [
      "Explainable AI (XAI)",
      "Clinical AI",
      "Predictive Modeling",
      "Machine Learning"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{haque2026explaina,\n  title={Explainable Machine Learning and Unsupervised Knowledge Discovery for University Student Depression Risk Assessment and Decision Support},\n  author={Obaidul Haque},\n  journal={Peer-Reviewed Journal},\n  year={2026},\n  publisher={Springer Nature}\n}",
    "apa": "Obaidul Haque (2026). Explainable Machine Learning and Unsupervised Knowledge Discovery for University Student Depression Risk Assessment and Decision Support. Peer-Reviewed Journal.",
    "ieee": "Obaidul Haque, \"Explainable Machine Learning and Unsupervised Knowledge Discovery for University Student Depression Risk Assessment and Decision Support,\" in Peer-Reviewed Journal, 2026."
  },
  {
    "id": "xai-meets-generative-ai-a-systematic-review-o-2026-9",
    "title": "XAI Meets Generative AI: A Systematic Review of Methods and Applications",
    "type": "Journal",
    "venue": "Peer-Reviewed Journal",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "TQ1",
    "status": "working",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque",
    "authorList": [
      "Obaidul Haque"
    ],
    "category": "Clinical AI & Healthcare",
    "impactBadge": "Springer Nature TQ1",
    "abstract": "A comprehensive empirical and clinical investigation formulating XAI Meets Generative AI. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core XAI Meets Generative AI computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Explainable AI (XAI)",
      "Clinical AI",
      "Predictive Modeling",
      "Machine Learning"
    ],
    "tags": [
      "Explainable AI (XAI)",
      "Clinical AI",
      "Predictive Modeling",
      "Machine Learning"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{haque2026xai-meet,\n  title={XAI Meets Generative AI: A Systematic Review of Methods and Applications},\n  author={Obaidul Haque},\n  journal={Peer-Reviewed Journal},\n  year={2026},\n  publisher={Springer Nature}\n}",
    "apa": "Obaidul Haque (2026). XAI Meets Generative AI: A Systematic Review of Methods and Applications. Peer-Reviewed Journal.",
    "ieee": "Obaidul Haque, \"XAI Meets Generative AI: A Systematic Review of Methods and Applications,\" in Peer-Reviewed Journal, 2026."
  },
  {
    "id": "semantic-analysis-of-bangla-pair-sentences-2026-10",
    "title": "Semantic Analysis of Bangla Pair Sentences",
    "type": "Journal",
    "venue": "Peer-Reviewed Journal",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "TQ1",
    "status": "working",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque",
    "authorList": [
      "Obaidul Haque"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "Springer Nature TQ1",
    "abstract": "Addresses low-resource linguistic challenges through Semantic Analysis of Bangla Pair Sentences. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core Semantic Analysis of Bangla Pair Sentences computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Bengali NLP",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "tags": [
      "Bengali NLP",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{haque2026semantic,\n  title={Semantic Analysis of Bangla Pair Sentences},\n  author={Obaidul Haque},\n  journal={Peer-Reviewed Journal},\n  year={2026},\n  publisher={Springer Nature}\n}",
    "apa": "Obaidul Haque (2026). Semantic Analysis of Bangla Pair Sentences. Peer-Reviewed Journal.",
    "ieee": "Obaidul Haque, \"Semantic Analysis of Bangla Pair Sentences,\" in Peer-Reviewed Journal, 2026."
  },
  {
    "id": "russian-ukrain-100k-dataset-2027-11",
    "title": "Russian Ukrain 100k Dataset",
    "type": "Journal",
    "venue": "Peer-Reviewed Journal",
    "location": null,
    "publisher": "Springer Nature",
    "level": "Q1",
    "qIf": "TQ1",
    "status": "working",
    "year": 2027,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque",
    "authorList": [
      "Obaidul Haque"
    ],
    "category": "Clinical AI & Healthcare",
    "impactBadge": "Springer Nature TQ1",
    "abstract": "A comprehensive empirical and clinical investigation formulating Russian Ukrain 100k Dataset. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Russian Ukrain 100k Dataset computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Clinical AI",
      "Predictive Modeling",
      "Machine Learning"
    ],
    "tags": [
      "Clinical AI",
      "Predictive Modeling",
      "Machine Learning"
    ],
    "url": null,
    "doi": null,
    "pid": null,
    "bibtex": "@article{haque2027russian-,\n  title={Russian Ukrain 100k Dataset},\n  author={Obaidul Haque},\n  journal={Peer-Reviewed Journal},\n  year={2027},\n  publisher={Springer Nature}\n}",
    "apa": "Obaidul Haque (2027). Russian Ukrain 100k Dataset. Peer-Reviewed Journal.",
    "ieee": "Obaidul Haque, \"Russian Ukrain 100k Dataset,\" in Peer-Reviewed Journal, 2027."
  },
  {
    "id": "a-comprehensive-approach-to-fetal-health-pred-2024-12",
    "title": "A Comprehensive Approach to Fetal Health Prediction Using Machine Learning and Ensemble Models",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "published",
    "year": 2024,
    "authorPosition": "3rd Author",
    "authors": "Md. Samiul Alom, A.S.M. Shakil Ahamed, Obaidul Haque",
    "authorList": [
      "Md. Samiul Alom",
      "A.S.M. Shakil Ahamed",
      "Obaidul Haque"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE B",
    "abstract": "A comprehensive empirical and clinical investigation formulating A Comprehensive Approach to Fetal Health Prediction Using Machine Learning and Ensemble Models. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core A Comprehensive Approach to Fetal Health Prediction Using Machine Learning and Ensemble Models computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Ensemble Stacking",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Low-Dose CT",
      "Ensemble Stacking",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": "https://ieeexplore.ieee.org/abstract/document/11022051/",
    "doi": null,
    "pid": "473",
    "bibtex": "@inproceedings{alom2024a-compre,\n  title={A Comprehensive Approach to Fetal Health Prediction Using Machine Learning and Ensemble Models},\n  author={Md. Samiul Alom and A.S.M. Shakil Ahamed and Obaidul Haque},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2024},\n  organization={IEEE}\n}",
    "apa": "Md. Samiul Alom, A.S.M. Shakil Ahamed, Obaidul Haque (2024). A Comprehensive Approach to Fetal Health Prediction Using Machine Learning and Ensemble Models. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Md. Samiul Alom, A.S.M. Shakil Ahamed, Obaidul Haque, \"A Comprehensive Approach to Fetal Health Prediction Using Machine Learning and Ensemble Models,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2024."
  },
  {
    "id": "banglabert-bilstm-a-novel-hybrid-architecture-2025-13",
    "title": "BanglaBERT-BiLSTM: A Novel Hybrid Architecture for Multiclass Mental Health Classification in Bengali Social Media Text",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "published",
    "year": 2025,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Ashraful Hossain, Mariha Tabassum, Rajib Khan, Fahim Shakil Tamim",
    "authorList": [
      "Obaidul Haque",
      "Ashraful Hossain",
      "Mariha Tabassum",
      "Rajib Khan",
      "Fahim Shakil Tamim"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE B",
    "abstract": "Addresses low-resource linguistic challenges through BanglaBERT-BiLSTM. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core BanglaBERT-BiLSTM computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Transformers",
      "Bengali NLP"
    ],
    "tags": [
      "Low-Dose CT",
      "Transformers",
      "Bengali NLP"
    ],
    "url": "https://ieeexplore.ieee.org/abstract/document/11490465/",
    "doi": null,
    "pid": "1590",
    "bibtex": "@inproceedings{haque2025banglabe,\n  title={BanglaBERT-BiLSTM: A Novel Hybrid Architecture for Multiclass Mental Health Classification in Bengali Social Media Text},\n  author={Obaidul Haque and Ashraful Hossain and Mariha Tabassum and Rajib Khan and Fahim Shakil Tamim},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2025},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Ashraful Hossain, Mariha Tabassum, Rajib Khan, Fahim Shakil Tamim (2025). BanglaBERT-BiLSTM: A Novel Hybrid Architecture for Multiclass Mental Health Classification in Bengali Social Media Text. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Obaidul Haque, Ashraful Hossain, Mariha Tabassum, Rajib Khan, Fahim Shakil Tamim, \"BanglaBERT-BiLSTM: A Novel Hybrid Architecture for Multiclass Mental Health Classification in Bengali Social Media Text,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2025."
  },
  {
    "id": "a-unified-soft-voting-ensemble-model-for-bang-2025-14",
    "title": "A Unified Soft Voting Ensemble Model for Bangla SMS Spam Detection Using a Novel Annotated Dataset",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "published",
    "year": 2025,
    "authorPosition": "3rd Author",
    "authors": "Md. Rashedul Islam Rifat, S.M. Abu Talha Shihab, Obaidul Haque, Naeem Mia",
    "authorList": [
      "Md. Rashedul Islam Rifat",
      "S.M. Abu Talha Shihab",
      "Obaidul Haque",
      "Naeem Mia"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE B",
    "abstract": "Addresses low-resource linguistic challenges through A Unified Soft Voting Ensemble Model for Bangla SMS Spam Detection Using a Novel Annotated Dataset. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core A Unified Soft Voting Ensemble Model for Bangla SMS Spam Detection Using a Novel Annotated Dataset computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Bengali NLP",
      "Ensemble Stacking"
    ],
    "tags": [
      "Low-Dose CT",
      "Bengali NLP",
      "Ensemble Stacking"
    ],
    "url": "https://ieeexplore.ieee.org/abstract/document/11490383/",
    "doi": null,
    "pid": "373",
    "bibtex": "@inproceedings{rifat2025a-unifie,\n  title={A Unified Soft Voting Ensemble Model for Bangla SMS Spam Detection Using a Novel Annotated Dataset},\n  author={Md. Rashedul Islam Rifat and S.M. Abu Talha Shihab and Obaidul Haque and Naeem Mia},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2025},\n  organization={IEEE}\n}",
    "apa": "Md. Rashedul Islam Rifat, S.M. Abu Talha Shihab, Obaidul Haque, Naeem Mia (2025). A Unified Soft Voting Ensemble Model for Bangla SMS Spam Detection Using a Novel Annotated Dataset. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Md. Rashedul Islam Rifat, S.M. Abu Talha Shihab, Obaidul Haque, Naeem Mia, \"A Unified Soft Voting Ensemble Model for Bangla SMS Spam Detection Using a Novel Annotated Dataset,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2025."
  },
  {
    "id": "taff-net-an-explainable-triple-attention-feat-2026-15",
    "title": "TAFF-Net: An Explainable Triple-Attention Feature Fusion Network for Intelligent Tea Leaf Disease Recognition",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Dr. Md. Abdul Awal",
    "authorList": [
      "Abu Bakar Rakib",
      "Obaidul Haque",
      "Abrar Rakin",
      "Dr. Md. Abdul Awal"
    ],
    "category": "Agriculture & Environmental AI",
    "impactBadge": "IEEE B",
    "abstract": "Proposes a robust computer vision and pattern recognition pipeline for TAFF-Net. Integrates adaptive frequency regularization and multi-scale visual feature fusion to deliver accurate, field-deployable diagnostics under variable illumination and environmental noise.",
    "contributions": [
      "Designed and formulated the core TAFF-Net computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Explainable AI (XAI)",
      "Agricultural Diagnostics",
      "Precision Agriculture",
      "Computer Vision",
      "Pattern Recognition"
    ],
    "tags": [
      "Explainable AI (XAI)",
      "Agricultural Diagnostics",
      "Precision Agriculture",
      "Computer Vision",
      "Pattern Recognition"
    ],
    "url": null,
    "doi": null,
    "pid": "682",
    "bibtex": "@inproceedings{rakib2026taff-net,\n  title={TAFF-Net: An Explainable Triple-Attention Feature Fusion Network for Intelligent Tea Leaf Disease Recognition},\n  author={Abu Bakar Rakib and Obaidul Haque and Abrar Rakin and Dr. Md. Abdul Awal},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Dr. Md. Abdul Awal (2026). TAFF-Net: An Explainable Triple-Attention Feature Fusion Network for Intelligent Tea Leaf Disease Recognition. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Dr. Md. Abdul Awal, \"TAFF-Net: An Explainable Triple-Attention Feature Fusion Network for Intelligent Tea Leaf Disease Recognition,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "machine-learning-framework-for-updrs-score-pr-2026-16",
    "title": "Machine Learning Framework for UPDRS Score Prediction and Parkinson’s Disease Severity Classification Using Voice Biomarkers",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abrar Rakin, Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, Mohshina Sultana, Afrin Jahan Chowdhury, A. H. M. Kamal",
    "authorList": [
      "Abrar Rakin",
      "Obaidul Haque",
      "Abu Bakar Rakib",
      "Ferdaus Anam Jibon",
      "Mohshina Sultana",
      "Afrin Jahan Chowdhury",
      "A. H. M. Kamal"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE B",
    "abstract": "A comprehensive empirical and clinical investigation formulating Machine Learning Framework for UPDRS Score Prediction and Parkinson’s Disease Severity Classification Using Voice Biomarkers. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Machine Learning Framework for UPDRS Score Prediction and Parkinson’s Disease Severity Classification Using Voice Biomarkers computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Voice Biomarkers",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Low-Dose CT",
      "Voice Biomarkers",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "721",
    "bibtex": "@inproceedings{rakin2026machine-,\n  title={Machine Learning Framework for UPDRS Score Prediction and Parkinson’s Disease Severity Classification Using Voice Biomarkers},\n  author={Abrar Rakin and Obaidul Haque and Abu Bakar Rakib and Ferdaus Anam Jibon and Mohshina Sultana and Afrin Jahan Chowdhury and A. H. M. Kamal},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abrar Rakin, Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, Mohshina Sultana, Afrin Jahan Chowdhury, A. H. M. Kamal (2026). Machine Learning Framework for UPDRS Score Prediction and Parkinson’s Disease Severity Classification Using Voice Biomarkers. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Abrar Rakin, Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, Mohshina Sultana, Afrin Jahan Chowdhury, A. H. M. Kamal, \"Machine Learning Framework for UPDRS Score Prediction and Parkinson’s Disease Severity Classification Using Voice Biomarkers,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "thymambanet-a-boundary-aware-convnext-mamba-n-2026-17",
    "title": "ThyMambaNet: A Boundary-Aware ConvNeXt-Mamba Network with Morphological Guidance for Thyroid Nodule Segmentation in Ultrasound Images",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "Co-Author",
    "authors": "Abu Bakar Rakib, Md. Faysal Ahmed, Abrar Rakin, Obaidul Haque, Ishtiak Al Mamoon",
    "authorList": [
      "Abu Bakar Rakib",
      "Md. Faysal Ahmed",
      "Abrar Rakin",
      "Obaidul Haque",
      "Ishtiak Al Mamoon"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE B",
    "abstract": "Investigates linear-time state-space architectures (Mamba) applied to ThyMambaNet, achieving continuous state transitions and robust contextual representations under noisy domain conditions while maintaining superior computational efficiency over quadratic self-attention baselines.",
    "contributions": [
      "Designed and formulated the core ThyMambaNet computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Mamba SSM",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Mamba SSM",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "914",
    "bibtex": "@inproceedings{rakib2026thymamba,\n  title={ThyMambaNet: A Boundary-Aware ConvNeXt-Mamba Network with Morphological Guidance for Thyroid Nodule Segmentation in Ultrasound Images},\n  author={Abu Bakar Rakib and Md. Faysal Ahmed and Abrar Rakin and Obaidul Haque and Ishtiak Al Mamoon},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Md. Faysal Ahmed, Abrar Rakin, Obaidul Haque, Ishtiak Al Mamoon (2026). ThyMambaNet: A Boundary-Aware ConvNeXt-Mamba Network with Morphological Guidance for Thyroid Nodule Segmentation in Ultrasound Images. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Abu Bakar Rakib, Md. Faysal Ahmed, Abrar Rakin, Obaidul Haque, Ishtiak Al Mamoon, \"ThyMambaNet: A Boundary-Aware ConvNeXt-Mamba Network with Morphological Guidance for Thyroid Nodule Segmentation in Ultrasound Images,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "effifloodnet-a-lightweight-haar-wavelet-frequ-2026-18",
    "title": "EffiFloodNet: A Lightweight Haar Wavelet Frequency Attention Network for Flood Segmentation from Remote Sensing Images",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Md Golam Murtoza, Md. Abdur Rahim, A. H. M. Kamal",
    "authorList": [
      "Obaidul Haque",
      "Kazi Lamia Sinja Sunjida",
      "Ferdaus Anam Jibon",
      "Md Golam Murtoza",
      "Md. Abdur Rahim",
      "A. H. M. Kamal"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE B",
    "abstract": "Proposes a robust computer vision and pattern recognition pipeline for EffiFloodNet. Integrates adaptive frequency regularization and multi-scale visual feature fusion to deliver accurate, field-deployable diagnostics under variable illumination and environmental noise.",
    "contributions": [
      "Designed and formulated the core EffiFloodNet computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Remote Sensing",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Remote Sensing",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "972",
    "bibtex": "@inproceedings{haque2026effifloo,\n  title={EffiFloodNet: A Lightweight Haar Wavelet Frequency Attention Network for Flood Segmentation from Remote Sensing Images},\n  author={Obaidul Haque and Kazi Lamia Sinja Sunjida and Ferdaus Anam Jibon and Md Golam Murtoza and Md. Abdur Rahim and A. H. M. Kamal},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Md Golam Murtoza, Md. Abdur Rahim, A. H. M. Kamal (2026). EffiFloodNet: A Lightweight Haar Wavelet Frequency Attention Network for Flood Segmentation from Remote Sensing Images. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Md Golam Murtoza, Md. Abdur Rahim, A. H. M. Kamal, \"EffiFloodNet: A Lightweight Haar Wavelet Frequency Attention Network for Flood Segmentation from Remote Sensing Images,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "an-explainable-hybrid-architecture-for-common-2026-19",
    "title": "An Explainable Hybrid Architecture for Commonsense Reasoning in Bengali",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Dr. Md. Abdul Awal",
    "authorList": [
      "Abu Bakar Rakib",
      "Obaidul Haque",
      "Abrar Rakin",
      "Dr. Md. Abdul Awal"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE B",
    "abstract": "Addresses low-resource linguistic challenges through An Explainable Hybrid Architecture for Commonsense Reasoning in Bengali. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core An Explainable Hybrid Architecture for Commonsense Reasoning in Bengali computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Bengali NLP",
      "Explainable AI (XAI)"
    ],
    "tags": [
      "Low-Dose CT",
      "Bengali NLP",
      "Explainable AI (XAI)"
    ],
    "url": null,
    "doi": null,
    "pid": "982",
    "bibtex": "@inproceedings{rakib2026an-expla,\n  title={An Explainable Hybrid Architecture for Commonsense Reasoning in Bengali},\n  author={Abu Bakar Rakib and Obaidul Haque and Abrar Rakin and Dr. Md. Abdul Awal},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Dr. Md. Abdul Awal (2026). An Explainable Hybrid Architecture for Commonsense Reasoning in Bengali. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Dr. Md. Abdul Awal, \"An Explainable Hybrid Architecture for Commonsense Reasoning in Bengali,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "oactnet-an-attention-based-acoustic-network-f-2026-20",
    "title": "OACTNet: An Attention-Based Acoustic Network for Automated Vocal Disorder Classification",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Tania Akter Setu, Toyeer-e-Ferdous, Md Golam Murtoza",
    "authorList": [
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Abu Bakar Rakib",
      "Tania Akter Setu",
      "Toyeer-e-Ferdous",
      "Md Golam Murtoza"
    ],
    "category": "Biomedical Signal Processing",
    "impactBadge": "IEEE B",
    "abstract": "A comprehensive empirical and clinical investigation formulating OACTNet. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core OACTNet computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Voice Biomarkers",
      "Biomedical Signals",
      "Neural Decoding",
      "Physiological AI"
    ],
    "tags": [
      "Low-Dose CT",
      "Voice Biomarkers",
      "Biomedical Signals",
      "Neural Decoding",
      "Physiological AI"
    ],
    "url": null,
    "doi": null,
    "pid": "1027",
    "bibtex": "@inproceedings{haque2026oactnet-,\n  title={OACTNet: An Attention-Based Acoustic Network for Automated Vocal Disorder Classification},\n  author={Obaidul Haque and Ferdaus Anam Jibon and Abu Bakar Rakib and Tania Akter Setu and Toyeer-e-Ferdous and Md Golam Murtoza},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Tania Akter Setu, Toyeer-e-Ferdous, Md Golam Murtoza (2026). OACTNet: An Attention-Based Acoustic Network for Automated Vocal Disorder Classification. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Tania Akter Setu, Toyeer-e-Ferdous, Md Golam Murtoza, \"OACTNet: An Attention-Based Acoustic Network for Automated Vocal Disorder Classification,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "an-explainable-frequency-aware-convnext-frame-2026-21",
    "title": "An Explainable Frequency-Aware ConvNeXt Framework for Osteoporosis Classification Using Knee X-Ray Images",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "3rd Author",
    "authors": "Abu Bakar Rakib, Ferdaus Anam Jibon, Obaidul Haque, Md Golam Murtoza, Dr. Md. Rashedul Islam, A. H. M. Kamal",
    "authorList": [
      "Abu Bakar Rakib",
      "Ferdaus Anam Jibon",
      "Obaidul Haque",
      "Md Golam Murtoza",
      "Dr. Md. Rashedul Islam",
      "A. H. M. Kamal"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE B",
    "abstract": "A comprehensive empirical and clinical investigation formulating An Explainable Frequency-Aware ConvNeXt Framework for Osteoporosis Classification Using Knee X-Ray Images. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core An Explainable Frequency-Aware ConvNeXt Framework for Osteoporosis Classification Using Knee X-Ray Images computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "X-Ray Analysis",
      "Explainable AI (XAI)",
      "Knee Radiography"
    ],
    "tags": [
      "X-Ray Analysis",
      "Explainable AI (XAI)",
      "Knee Radiography"
    ],
    "url": null,
    "doi": null,
    "pid": "1046",
    "bibtex": "@inproceedings{rakib2026an-expla,\n  title={An Explainable Frequency-Aware ConvNeXt Framework for Osteoporosis Classification Using Knee X-Ray Images},\n  author={Abu Bakar Rakib and Ferdaus Anam Jibon and Obaidul Haque and Md Golam Murtoza and Dr. Md. Rashedul Islam and A. H. M. Kamal},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Ferdaus Anam Jibon, Obaidul Haque, Md Golam Murtoza, Dr. Md. Rashedul Islam, A. H. M. Kamal (2026). An Explainable Frequency-Aware ConvNeXt Framework for Osteoporosis Classification Using Knee X-Ray Images. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Abu Bakar Rakib, Ferdaus Anam Jibon, Obaidul Haque, Md Golam Murtoza, Dr. Md. Rashedul Islam, A. H. M. Kamal, \"An Explainable Frequency-Aware ConvNeXt Framework for Osteoporosis Classification Using Knee X-Ray Images,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "mmirage-medical-interaction-reasoning-for-cli-2026-22",
    "title": "MMIRAGE: Medical Interaction Reasoning for Clinically Grounded Explainability in Bangla Healthcare Severity Classification",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Mariha Tabassum, Obaidul Haque, Ferdaus Anam Jibon, Md Golam Murtoza, Mohshina Sultana, Md. Abdur Rahim",
    "authorList": [
      "Mariha Tabassum",
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Md Golam Murtoza",
      "Mohshina Sultana",
      "Md. Abdur Rahim"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE B",
    "abstract": "Addresses low-resource linguistic challenges through MMIRAGE. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core MMIRAGE computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Bengali NLP",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "tags": [
      "Low-Dose CT",
      "Bengali NLP",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "url": null,
    "doi": null,
    "pid": "2274",
    "bibtex": "@inproceedings{tabassum2026mmirage-,\n  title={MMIRAGE: Medical Interaction Reasoning for Clinically Grounded Explainability in Bangla Healthcare Severity Classification},\n  author={Mariha Tabassum and Obaidul Haque and Ferdaus Anam Jibon and Md Golam Murtoza and Mohshina Sultana and Md. Abdur Rahim},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Mariha Tabassum, Obaidul Haque, Ferdaus Anam Jibon, Md Golam Murtoza, Mohshina Sultana, Md. Abdur Rahim (2026). MMIRAGE: Medical Interaction Reasoning for Clinically Grounded Explainability in Bangla Healthcare Severity Classification. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Mariha Tabassum, Obaidul Haque, Ferdaus Anam Jibon, Md Golam Murtoza, Mohshina Sultana, Md. Abdur Rahim, \"MMIRAGE: Medical Interaction Reasoning for Clinically Grounded Explainability in Bangla Healthcare Severity Classification,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "a-novel-code-mix-bangla-dataset-and-explainab-2026-23",
    "title": "A Novel Code-mix Bangla Dataset and Explainable AI Framework for Robust Spam Email Detection",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Jubayed Hossain Dipu, Obaidul Haque, Abu Bakar Rakib, Maksuda Akter",
    "authorList": [
      "Jubayed Hossain Dipu",
      "Obaidul Haque",
      "Abu Bakar Rakib",
      "Maksuda Akter"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE B",
    "abstract": "Addresses low-resource linguistic challenges through A Novel Code-mix Bangla Dataset and Explainable AI Framework for Robust Spam Email Detection. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core A Novel Code-mix Bangla Dataset and Explainable AI Framework for Robust Spam Email Detection computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Bengali NLP",
      "Explainable AI (XAI)"
    ],
    "tags": [
      "Low-Dose CT",
      "Bengali NLP",
      "Explainable AI (XAI)"
    ],
    "url": null,
    "doi": null,
    "pid": "2801",
    "bibtex": "@inproceedings{dipu2026a-novel-,\n  title={A Novel Code-mix Bangla Dataset and Explainable AI Framework for Robust Spam Email Detection},\n  author={Jubayed Hossain Dipu and Obaidul Haque and Abu Bakar Rakib and Maksuda Akter},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Jubayed Hossain Dipu, Obaidul Haque, Abu Bakar Rakib, Maksuda Akter (2026). A Novel Code-mix Bangla Dataset and Explainable AI Framework for Robust Spam Email Detection. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Jubayed Hossain Dipu, Obaidul Haque, Abu Bakar Rakib, Maksuda Akter, \"A Novel Code-mix Bangla Dataset and Explainable AI Framework for Robust Spam Email Detection,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "dsgcl-bert-a-graph-enhanced-contrastive-learn-2026-24",
    "title": "DSGCL-BERT: A Graph-Enhanced Contrastive Learning Framework for Bengali Dialect Identification",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Md Golam Murtoza, Mohshina Sultana, Md. Abdur Rahim",
    "authorList": [
      "Obaidul Haque",
      "Kazi Lamia Sinja Sunjida",
      "Ferdaus Anam Jibon",
      "Md Golam Murtoza",
      "Mohshina Sultana",
      "Md. Abdur Rahim"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE B",
    "abstract": "Addresses low-resource linguistic challenges through DSGCL-BERT. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core DSGCL-BERT computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Transformers",
      "Bengali NLP"
    ],
    "tags": [
      "Low-Dose CT",
      "Transformers",
      "Bengali NLP"
    ],
    "url": null,
    "doi": null,
    "pid": "2810",
    "bibtex": "@inproceedings{haque2026dsgcl-be,\n  title={DSGCL-BERT: A Graph-Enhanced Contrastive Learning Framework for Bengali Dialect Identification},\n  author={Obaidul Haque and Kazi Lamia Sinja Sunjida and Ferdaus Anam Jibon and Md Golam Murtoza and Mohshina Sultana and Md. Abdur Rahim},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Md Golam Murtoza, Mohshina Sultana, Md. Abdur Rahim (2026). DSGCL-BERT: A Graph-Enhanced Contrastive Learning Framework for Bengali Dialect Identification. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Md Golam Murtoza, Mohshina Sultana, Md. Abdur Rahim, \"DSGCL-BERT: A Graph-Enhanced Contrastive Learning Framework for Bengali Dialect Identification,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "reliable-ocular-disease-classification-via-le-2026-25",
    "title": "Reliable Ocular Disease Classification via Learned Confidence Estimation and Selective Prediction",
    "type": "Conference",
    "venue": "IEEE International Conference on Computer and Information Technology (ICCIT)",
    "location": "Cox's Bazar, Bangladesh",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abrar Rakin, Obaidul Haque, Ferdaus Anam Jibon, Tania Akter Setu, Md Golam Murtoza, Afsana Akter Lija",
    "authorList": [
      "Abrar Rakin",
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Tania Akter Setu",
      "Md Golam Murtoza",
      "Afsana Akter Lija"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE B",
    "abstract": "A comprehensive empirical and clinical investigation formulating Reliable Ocular Disease Classification via Learned Confidence Estimation and Selective Prediction. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Reliable Ocular Disease Classification via Learned Confidence Estimation and Selective Prediction computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "3402",
    "bibtex": "@inproceedings{rakin2026reliable,\n  title={Reliable Ocular Disease Classification via Learned Confidence Estimation and Selective Prediction},\n  author={Abrar Rakin and Obaidul Haque and Ferdaus Anam Jibon and Tania Akter Setu and Md Golam Murtoza and Afsana Akter Lija},\n  booktitle={IEEE International Conference on Computer and Information Technology (ICCIT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abrar Rakin, Obaidul Haque, Ferdaus Anam Jibon, Tania Akter Setu, Md Golam Murtoza, Afsana Akter Lija (2026). Reliable Ocular Disease Classification via Learned Confidence Estimation and Selective Prediction. IEEE International Conference on Computer and Information Technology (ICCIT).",
    "ieee": "Abrar Rakin, Obaidul Haque, Ferdaus Anam Jibon, Tania Akter Setu, Md Golam Murtoza, Afsana Akter Lija, \"Reliable Ocular Disease Classification via Learned Confidence Estimation and Selective Prediction,\" in IEEE International Conference on Computer and Information Technology (ICCIT), 2026."
  },
  {
    "id": "attention-based-multi-modal-sleep-stage-class-2026-26",
    "title": "Attention Based Multi modal Sleep Stage Classification Using EEG EOG and EMG Signals",
    "type": "Conference",
    "venue": "IEEE International Conference on Electrical and Computer Engineering (ICECE)",
    "location": "BUET, Dhaka",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Mariha Tabassum, Ferdaus Anam Jibon, Abrar Rakin, A. H. M. Kamal, Md Golam Murtoza",
    "authorList": [
      "Obaidul Haque",
      "Mariha Tabassum",
      "Ferdaus Anam Jibon",
      "Abrar Rakin",
      "A. H. M. Kamal",
      "Md Golam Murtoza"
    ],
    "category": "Biomedical Signal Processing",
    "impactBadge": "IEEE B",
    "abstract": "Presents an end-to-end deep learning framework for Attention Based Multi modal Sleep Stage Classification Using EEG EOG and EMG Signals. Integrates advanced temporal feature extraction and frequency-domain decomposition to capture subtle physiological transitions across multi-channel recording setups with rigorous cross-validation.",
    "contributions": [
      "Designed and formulated the core Attention Based Multi modal Sleep Stage Classification Using EEG EOG and EMG Signals computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "EEG Signals",
      "EMG",
      "Sleep Staging"
    ],
    "tags": [
      "EEG Signals",
      "EMG",
      "Sleep Staging"
    ],
    "url": null,
    "doi": null,
    "pid": "173",
    "bibtex": "@inproceedings{haque2026attentio,\n  title={Attention Based Multi modal Sleep Stage Classification Using EEG EOG and EMG Signals},\n  author={Obaidul Haque and Mariha Tabassum and Ferdaus Anam Jibon and Abrar Rakin and A. H. M. Kamal and Md Golam Murtoza},\n  booktitle={IEEE International Conference on Electrical and Computer Engineering (ICECE)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Mariha Tabassum, Ferdaus Anam Jibon, Abrar Rakin, A. H. M. Kamal, Md Golam Murtoza (2026). Attention Based Multi modal Sleep Stage Classification Using EEG EOG and EMG Signals. IEEE International Conference on Electrical and Computer Engineering (ICECE).",
    "ieee": "Obaidul Haque, Mariha Tabassum, Ferdaus Anam Jibon, Abrar Rakin, A. H. M. Kamal, Md Golam Murtoza, \"Attention Based Multi modal Sleep Stage Classification Using EEG EOG and EMG Signals,\" in IEEE International Conference on Electrical and Computer Engineering (ICECE), 2026."
  },
  {
    "id": "rms-lens-anatomy-aware-memory-learning-for-un-2026-27",
    "title": "RMS-LENS: Anatomy-Aware Memory Learning for Unsupervised Lesion Discovery in Multiple Sclerosis MRI",
    "type": "Conference",
    "venue": "IEEE International Conference on Electrical and Computer Engineering (ICECE)",
    "location": "BUET, Dhaka",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abrar Rakin, Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Dr. Md. Ashraful Islam, Md Golam Murtoza",
    "authorList": [
      "Abrar Rakin",
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Abu Bakar Rakib",
      "Dr. Md. Ashraful Islam",
      "Md Golam Murtoza"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE B",
    "abstract": "A comprehensive empirical and clinical investigation formulating RMS-LENS. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core RMS-LENS computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Brain MRI",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Brain MRI",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "429",
    "bibtex": "@inproceedings{rakin2026rms-lens,\n  title={RMS-LENS: Anatomy-Aware Memory Learning for Unsupervised Lesion Discovery in Multiple Sclerosis MRI},\n  author={Abrar Rakin and Obaidul Haque and Ferdaus Anam Jibon and Abu Bakar Rakib and Dr. Md. Ashraful Islam and Md Golam Murtoza},\n  booktitle={IEEE International Conference on Electrical and Computer Engineering (ICECE)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abrar Rakin, Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Dr. Md. Ashraful Islam, Md Golam Murtoza (2026). RMS-LENS: Anatomy-Aware Memory Learning for Unsupervised Lesion Discovery in Multiple Sclerosis MRI. IEEE International Conference on Electrical and Computer Engineering (ICECE).",
    "ieee": "Abrar Rakin, Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Dr. Md. Ashraful Islam, Md Golam Murtoza, \"RMS-LENS: Anatomy-Aware Memory Learning for Unsupervised Lesion Discovery in Multiple Sclerosis MRI,\" in IEEE International Conference on Electrical and Computer Engineering (ICECE), 2026."
  },
  {
    "id": "convnext1d-based-five-class-eeg-classificatio-2026-28",
    "title": "ConvNeXt1D-Based Five-Class EEG Classification: A Frequency-Band Analysis of Healthy, Interictal and Seizure States",
    "type": "Conference",
    "venue": "IEEE International Conference on Electrical and Computer Engineering (ICECE)",
    "location": "BUET, Dhaka",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Utpal Kanti Das, Md Golam Murtoza, Md. Abdur Rahim",
    "authorList": [
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Abu Bakar Rakib",
      "Utpal Kanti Das",
      "Md Golam Murtoza",
      "Md. Abdur Rahim"
    ],
    "category": "Biomedical Signal Processing",
    "impactBadge": "IEEE B",
    "abstract": "Presents an end-to-end deep learning framework for ConvNeXt1D-Based Five-Class EEG Classification. Integrates advanced temporal feature extraction and frequency-domain decomposition to capture subtle physiological transitions across multi-channel recording setups with rigorous cross-validation.",
    "contributions": [
      "Designed and formulated the core ConvNeXt1D-Based Five-Class EEG Classification computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "EEG Signals",
      "Low-Dose CT",
      "Epileptic Seizures"
    ],
    "tags": [
      "EEG Signals",
      "Low-Dose CT",
      "Epileptic Seizures"
    ],
    "url": null,
    "doi": null,
    "pid": "705",
    "bibtex": "@inproceedings{haque2026convnext,\n  title={ConvNeXt1D-Based Five-Class EEG Classification: A Frequency-Band Analysis of Healthy, Interictal and Seizure States},\n  author={Obaidul Haque and Ferdaus Anam Jibon and Abu Bakar Rakib and Utpal Kanti Das and Md Golam Murtoza and Md. Abdur Rahim},\n  booktitle={IEEE International Conference on Electrical and Computer Engineering (ICECE)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Utpal Kanti Das, Md Golam Murtoza, Md. Abdur Rahim (2026). ConvNeXt1D-Based Five-Class EEG Classification: A Frequency-Band Analysis of Healthy, Interictal and Seizure States. IEEE International Conference on Electrical and Computer Engineering (ICECE).",
    "ieee": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Utpal Kanti Das, Md Golam Murtoza, Md. Abdur Rahim, \"ConvNeXt1D-Based Five-Class EEG Classification: A Frequency-Band Analysis of Healthy, Interictal and Seizure States,\" in IEEE International Conference on Electrical and Computer Engineering (ICECE), 2026."
  },
  {
    "id": "ssac-mamba-spectral-state-adaptive-mamba-for-2026-29",
    "title": "SSAC-Mamba: Spectral State-Adaptive Mamba for Robust Building Change Detection in Bi-Temporal Satellite Imagery",
    "type": "Conference",
    "venue": "IEEE International Conference on Electrical and Computer Engineering (ICECE)",
    "location": "BUET, Dhaka",
    "publisher": "IEEE",
    "level": "B",
    "qIf": null,
    "status": "submitted",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, A. H. M. Kamal, Tania Akter Setu, Md. Abdur Rahim",
    "authorList": [
      "Obaidul Haque",
      "Abu Bakar Rakib",
      "Ferdaus Anam Jibon",
      "A. H. M. Kamal",
      "Tania Akter Setu",
      "Md. Abdur Rahim"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE B",
    "abstract": "Investigates linear-time state-space architectures (Mamba) applied to SSAC-Mamba, achieving continuous state transitions and robust contextual representations under noisy domain conditions while maintaining superior computational efficiency over quadratic self-attention baselines.",
    "contributions": [
      "Designed and formulated the core SSAC-Mamba computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Mamba SSM",
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Mamba SSM",
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "707",
    "bibtex": "@inproceedings{haque2026ssac-mam,\n  title={SSAC-Mamba: Spectral State-Adaptive Mamba for Robust Building Change Detection in Bi-Temporal Satellite Imagery},\n  author={Obaidul Haque and Abu Bakar Rakib and Ferdaus Anam Jibon and A. H. M. Kamal and Tania Akter Setu and Md. Abdur Rahim},\n  booktitle={IEEE International Conference on Electrical and Computer Engineering (ICECE)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, A. H. M. Kamal, Tania Akter Setu, Md. Abdur Rahim (2026). SSAC-Mamba: Spectral State-Adaptive Mamba for Robust Building Change Detection in Bi-Temporal Satellite Imagery. IEEE International Conference on Electrical and Computer Engineering (ICECE).",
    "ieee": "Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, A. H. M. Kamal, Tania Akter Setu, Md. Abdur Rahim, \"SSAC-Mamba: Spectral State-Adaptive Mamba for Robust Building Change Detection in Bi-Temporal Satellite Imagery,\" in IEEE International Conference on Electrical and Computer Engineering (ICECE), 2026."
  },
  {
    "id": "marinejformer-a-saliency-aware-multi-axis-vis-2026-30",
    "title": "MarineJFormer: A Saliency-Aware Multi-Axis Vision Transformer for Underwater Marine Species Recognition",
    "type": "Conference",
    "venue": "ACM International Conference on Computing Advancements (ICCA)",
    "location": "AIUB, Dhaka",
    "publisher": "ACM",
    "level": "A",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Mst. Moushin Anjum, Obaidul Haque, Sheekar Banerjee, Fatema Akter, Ishtiak Al Mamoon",
    "authorList": [
      "Mst. Moushin Anjum",
      "Obaidul Haque",
      "Sheekar Banerjee",
      "Fatema Akter",
      "Ishtiak Al Mamoon"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "ACM A",
    "abstract": "A comprehensive empirical and clinical investigation formulating MarineJFormer. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core MarineJFormer computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Transformers",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Transformers",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "936",
    "bibtex": "@inproceedings{anjum2026marinejf,\n  title={MarineJFormer: A Saliency-Aware Multi-Axis Vision Transformer for Underwater Marine Species Recognition},\n  author={Mst. Moushin Anjum and Obaidul Haque and Sheekar Banerjee and Fatema Akter and Ishtiak Al Mamoon},\n  booktitle={ACM International Conference on Computing Advancements (ICCA)},\n  year={2026},\n  organization={ACM}\n}",
    "apa": "Mst. Moushin Anjum, Obaidul Haque, Sheekar Banerjee, Fatema Akter, Ishtiak Al Mamoon (2026). MarineJFormer: A Saliency-Aware Multi-Axis Vision Transformer for Underwater Marine Species Recognition. ACM International Conference on Computing Advancements (ICCA).",
    "ieee": "Mst. Moushin Anjum, Obaidul Haque, Sheekar Banerjee, Fatema Akter, Ishtiak Al Mamoon, \"MarineJFormer: A Saliency-Aware Multi-Axis Vision Transformer for Underwater Marine Species Recognition,\" in ACM International Conference on Computing Advancements (ICCA), 2026."
  },
  {
    "id": "obais-mamba-kernel-invariant-anatomical-state-2026-31",
    "title": "OBAIS-Mamba: Kernel-Invariant Anatomical State Learning for Dose-Robust Low-Dose CT Reconstruction",
    "type": "Conference",
    "venue": "ACM International Conference on Computing Advancements (ICCA)",
    "location": "AIUB, Dhaka",
    "publisher": "ACM",
    "level": "A",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, Tania Akter Setu, Afrin Jahan Chowdhury, Abrar Rakin",
    "authorList": [
      "Obaidul Haque",
      "Abu Bakar Rakib",
      "Ferdaus Anam Jibon",
      "Tania Akter Setu",
      "Afrin Jahan Chowdhury",
      "Abrar Rakin"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "ACM A",
    "abstract": "Investigates linear-time state-space architectures (Mamba) applied to OBAIS-Mamba, achieving continuous state transitions and robust contextual representations under noisy domain conditions while maintaining superior computational efficiency over quadratic self-attention baselines.",
    "contributions": [
      "Designed and formulated the core OBAIS-Mamba computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Mamba SSM",
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Mamba SSM",
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "938",
    "bibtex": "@inproceedings{haque2026obais-ma,\n  title={OBAIS-Mamba: Kernel-Invariant Anatomical State Learning for Dose-Robust Low-Dose CT Reconstruction},\n  author={Obaidul Haque and Abu Bakar Rakib and Ferdaus Anam Jibon and Tania Akter Setu and Afrin Jahan Chowdhury and Abrar Rakin},\n  booktitle={ACM International Conference on Computing Advancements (ICCA)},\n  year={2026},\n  organization={ACM}\n}",
    "apa": "Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, Tania Akter Setu, Afrin Jahan Chowdhury, Abrar Rakin (2026). OBAIS-Mamba: Kernel-Invariant Anatomical State Learning for Dose-Robust Low-Dose CT Reconstruction. ACM International Conference on Computing Advancements (ICCA).",
    "ieee": "Obaidul Haque, Abu Bakar Rakib, Ferdaus Anam Jibon, Tania Akter Setu, Afrin Jahan Chowdhury, Abrar Rakin, \"OBAIS-Mamba: Kernel-Invariant Anatomical State Learning for Dose-Robust Low-Dose CT Reconstruction,\" in ACM International Conference on Computing Advancements (ICCA), 2026."
  },
  {
    "id": "ag-t5-a-lightweight-memory-hub-transformer-fo-2026-32",
    "title": "AG-T5: A Lightweight Memory Hub Transformer for Efficient Abstractive Summarization",
    "type": "Conference",
    "venue": "IEEE Conference on Advances in Computing and Communications (COMPASS)",
    "location": "University of Dhaka",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Abrar Rakin, Mariha Tabassum, Dr. Md. Abdul Awal",
    "authorList": [
      "Obaidul Haque",
      "Abrar Rakin",
      "Mariha Tabassum",
      "Dr. Md. Abdul Awal"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE C",
    "abstract": "Addresses low-resource linguistic challenges through AG-T5. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core AG-T5 computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Transformers",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "tags": [
      "Low-Dose CT",
      "Transformers",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "url": null,
    "doi": null,
    "pid": "635",
    "bibtex": "@inproceedings{haque2026ag-t5-a-,\n  title={AG-T5: A Lightweight Memory Hub Transformer for Efficient Abstractive Summarization},\n  author={Obaidul Haque and Abrar Rakin and Mariha Tabassum and Dr. Md. Abdul Awal},\n  booktitle={IEEE Conference on Advances in Computing and Communications (COMPASS)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Abrar Rakin, Mariha Tabassum, Dr. Md. Abdul Awal (2026). AG-T5: A Lightweight Memory Hub Transformer for Efficient Abstractive Summarization. IEEE Conference on Advances in Computing and Communications (COMPASS).",
    "ieee": "Obaidul Haque, Abrar Rakin, Mariha Tabassum, Dr. Md. Abdul Awal, \"AG-T5: A Lightweight Memory Hub Transformer for Efficient Abstractive Summarization,\" in IEEE Conference on Advances in Computing and Communications (COMPASS), 2026."
  },
  {
    "id": "explainable-multimodal-fusion-of-ecg-signals-2026-33",
    "title": "Explainable Multimodal Fusion of ECG Signals and Clinical Narratives for Automated Heart Disease Classification",
    "type": "Conference",
    "venue": "IEEE Conference on Advances in Computing and Communications (COMPASS)",
    "location": "University of Dhaka",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "3rd Author",
    "authors": "Abu Bakar Rakib, Ferdaus Anam Jibon, Obaidul Haque, Afsana Akter Lija, Dr. Md. Ashraful Islam",
    "authorList": [
      "Abu Bakar Rakib",
      "Ferdaus Anam Jibon",
      "Obaidul Haque",
      "Afsana Akter Lija",
      "Dr. Md. Ashraful Islam"
    ],
    "category": "Biomedical Signal Processing",
    "impactBadge": "IEEE C",
    "abstract": "Presents an end-to-end deep learning framework for Explainable Multimodal Fusion of ECG Signals and Clinical Narratives for Automated Heart Disease Classification. Integrates advanced temporal feature extraction and frequency-domain decomposition to capture subtle physiological transitions across multi-channel recording setups with rigorous cross-validation.",
    "contributions": [
      "Designed and formulated the core Explainable Multimodal Fusion of ECG Signals and Clinical Narratives for Automated Heart Disease Classification computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "ECG Arrhythmia",
      "Explainable AI (XAI)",
      "Biomedical Signals",
      "Neural Decoding",
      "Physiological AI"
    ],
    "tags": [
      "ECG Arrhythmia",
      "Explainable AI (XAI)",
      "Biomedical Signals",
      "Neural Decoding",
      "Physiological AI"
    ],
    "url": null,
    "doi": null,
    "pid": "652",
    "bibtex": "@inproceedings{rakib2026explaina,\n  title={Explainable Multimodal Fusion of ECG Signals and Clinical Narratives for Automated Heart Disease Classification},\n  author={Abu Bakar Rakib and Ferdaus Anam Jibon and Obaidul Haque and Afsana Akter Lija and Dr. Md. Ashraful Islam},\n  booktitle={IEEE Conference on Advances in Computing and Communications (COMPASS)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Ferdaus Anam Jibon, Obaidul Haque, Afsana Akter Lija, Dr. Md. Ashraful Islam (2026). Explainable Multimodal Fusion of ECG Signals and Clinical Narratives for Automated Heart Disease Classification. IEEE Conference on Advances in Computing and Communications (COMPASS).",
    "ieee": "Abu Bakar Rakib, Ferdaus Anam Jibon, Obaidul Haque, Afsana Akter Lija, Dr. Md. Ashraful Islam, \"Explainable Multimodal Fusion of ECG Signals and Clinical Narratives for Automated Heart Disease Classification,\" in IEEE Conference on Advances in Computing and Communications (COMPASS), 2026."
  },
  {
    "id": "efficientmswin-a-yolo-guided-multi-scale-swin-2026-34",
    "title": "EfficientMSwin: A YOLO-Guided Multi-Scale Swin Transformer for Fine-Grained Malaria Cell Stage Classification",
    "type": "Conference",
    "venue": "IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT)",
    "location": "Pabna, Bangladesh",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Mariha Tabassum, Ferdaus Anam Jibon, Tania Akter Setu, Shah Mostofa Tariquzzaman",
    "authorList": [
      "Obaidul Haque",
      "Mariha Tabassum",
      "Ferdaus Anam Jibon",
      "Tania Akter Setu",
      "Shah Mostofa Tariquzzaman"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating EfficientMSwin. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core EfficientMSwin computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Transformers",
      "YOLO",
      "Swin Transformer",
      "Cellular Diagnostics"
    ],
    "tags": [
      "Transformers",
      "YOLO",
      "Swin Transformer",
      "Cellular Diagnostics"
    ],
    "url": null,
    "doi": null,
    "pid": "521",
    "bibtex": "@inproceedings{haque2026efficien,\n  title={EfficientMSwin: A YOLO-Guided Multi-Scale Swin Transformer for Fine-Grained Malaria Cell Stage Classification},\n  author={Obaidul Haque and Mariha Tabassum and Ferdaus Anam Jibon and Tania Akter Setu and Shah Mostofa Tariquzzaman},\n  booktitle={IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Mariha Tabassum, Ferdaus Anam Jibon, Tania Akter Setu, Shah Mostofa Tariquzzaman (2026). EfficientMSwin: A YOLO-Guided Multi-Scale Swin Transformer for Fine-Grained Malaria Cell Stage Classification. IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT).",
    "ieee": "Obaidul Haque, Mariha Tabassum, Ferdaus Anam Jibon, Tania Akter Setu, Shah Mostofa Tariquzzaman, \"EfficientMSwin: A YOLO-Guided Multi-Scale Swin Transformer for Fine-Grained Malaria Cell Stage Classification,\" in IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT), 2026."
  },
  {
    "id": "how-much-prosody-is-enough-compact-prosody-bo-2026-35",
    "title": "How Much Prosody Is Enough? Compact Prosody Bottlenecks for Lightweight Text-to-Speech",
    "type": "Conference",
    "venue": "IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT)",
    "location": "Pabna, Bangladesh",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Abrar Rakin, Ferdaus Anam Jibon, Esrat Nourin, Mohshina Sultana",
    "authorList": [
      "Obaidul Haque",
      "Abrar Rakin",
      "Ferdaus Anam Jibon",
      "Esrat Nourin",
      "Mohshina Sultana"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE C",
    "abstract": "Addresses low-resource linguistic challenges through How Much Prosody Is Enough? Compact Prosody Bottlenecks for Lightweight Text-to-Speech. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core How Much Prosody Is Enough? Compact Prosody Bottlenecks for Lightweight Text-to-Speech computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "tags": [
      "Low-Dose CT",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "url": null,
    "doi": null,
    "pid": "545",
    "bibtex": "@inproceedings{haque2026how-much,\n  title={How Much Prosody Is Enough? Compact Prosody Bottlenecks for Lightweight Text-to-Speech},\n  author={Obaidul Haque and Abrar Rakin and Ferdaus Anam Jibon and Esrat Nourin and Mohshina Sultana},\n  booktitle={IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Abrar Rakin, Ferdaus Anam Jibon, Esrat Nourin, Mohshina Sultana (2026). How Much Prosody Is Enough? Compact Prosody Bottlenecks for Lightweight Text-to-Speech. IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT).",
    "ieee": "Obaidul Haque, Abrar Rakin, Ferdaus Anam Jibon, Esrat Nourin, Mohshina Sultana, \"How Much Prosody Is Enough? Compact Prosody Bottlenecks for Lightweight Text-to-Speech,\" in IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT), 2026."
  },
  {
    "id": "vit-dominant-gated-efficient-hybrid-network-f-2026-36",
    "title": "ViT-Dominant Gated Efficient Hybrid Network for Jute Leaf Disease Classification",
    "type": "Conference",
    "venue": "IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT)",
    "location": "Pabna, Bangladesh",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abu Bakar Rakib, Obaidul Haque, Ferdaus Anam Jibon, Dr. Md. Ashraful Islam, Md. Mahamudul Hasan Rahad",
    "authorList": [
      "Abu Bakar Rakib",
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Dr. Md. Ashraful Islam",
      "Md. Mahamudul Hasan Rahad"
    ],
    "category": "Agriculture & Environmental AI",
    "impactBadge": "IEEE C",
    "abstract": "Proposes a robust computer vision and pattern recognition pipeline for ViT-Dominant Gated Efficient Hybrid Network for Jute Leaf Disease Classification. Integrates adaptive frequency regularization and multi-scale visual feature fusion to deliver accurate, field-deployable diagnostics under variable illumination and environmental noise.",
    "contributions": [
      "Designed and formulated the core ViT-Dominant Gated Efficient Hybrid Network for Jute Leaf Disease Classification computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Transformers",
      "Agricultural Diagnostics",
      "Precision Agriculture",
      "Computer Vision",
      "Pattern Recognition"
    ],
    "tags": [
      "Transformers",
      "Agricultural Diagnostics",
      "Precision Agriculture",
      "Computer Vision",
      "Pattern Recognition"
    ],
    "url": null,
    "doi": null,
    "pid": "545",
    "bibtex": "@inproceedings{rakib2026vit-domi,\n  title={ViT-Dominant Gated Efficient Hybrid Network for Jute Leaf Disease Classification},\n  author={Abu Bakar Rakib and Obaidul Haque and Ferdaus Anam Jibon and Dr. Md. Ashraful Islam and Md. Mahamudul Hasan Rahad},\n  booktitle={IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Obaidul Haque, Ferdaus Anam Jibon, Dr. Md. Ashraful Islam, Md. Mahamudul Hasan Rahad (2026). ViT-Dominant Gated Efficient Hybrid Network for Jute Leaf Disease Classification. IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT).",
    "ieee": "Abu Bakar Rakib, Obaidul Haque, Ferdaus Anam Jibon, Dr. Md. Ashraful Islam, Md. Mahamudul Hasan Rahad, \"ViT-Dominant Gated Efficient Hybrid Network for Jute Leaf Disease Classification,\" in IEEE International Conference on Electronics, Communications and Information Technology (ICONNECT), 2026."
  },
  {
    "id": "from-perception-to-reconstruction-type-aware-2026-37",
    "title": "From Perception to Reconstruction: Type-Aware Semantic Color Priors for Color Vision Deficiency",
    "type": "Conference",
    "venue": "IEEE RAAICON",
    "location": "JUST, Jessore",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Ferdaus Anam Jibon, Rafat Ara, Esrat Nourin",
    "authorList": [
      "Abu Bakar Rakib",
      "Obaidul Haque",
      "Abrar Rakin",
      "Ferdaus Anam Jibon",
      "Rafat Ara",
      "Esrat Nourin"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating From Perception to Reconstruction. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core From Perception to Reconstruction computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Low-Dose CT",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "521",
    "bibtex": "@inproceedings{rakib2026from-per,\n  title={From Perception to Reconstruction: Type-Aware Semantic Color Priors for Color Vision Deficiency},\n  author={Abu Bakar Rakib and Obaidul Haque and Abrar Rakin and Ferdaus Anam Jibon and Rafat Ara and Esrat Nourin},\n  booktitle={IEEE RAAICON},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Ferdaus Anam Jibon, Rafat Ara, Esrat Nourin (2026). From Perception to Reconstruction: Type-Aware Semantic Color Priors for Color Vision Deficiency. IEEE RAAICON.",
    "ieee": "Abu Bakar Rakib, Obaidul Haque, Abrar Rakin, Ferdaus Anam Jibon, Rafat Ara, Esrat Nourin, \"From Perception to Reconstruction: Type-Aware Semantic Color Priors for Color Vision Deficiency,\" in IEEE RAAICON, 2026."
  },
  {
    "id": "gad-net-an-interpretable-deep-learning-framew-2026-38",
    "title": "GAD-Net: An Interpretable Deep Learning Framework for Automated Diabetic Retinopathy Screening in Smart Healthcare",
    "type": "Conference",
    "venue": "IEEE RAAICON",
    "location": "JUST, Jessore",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abrar Rakin, Obaidul Haque, Md Istiak Ahamed, Dr. Md. Ashraful Islam, Ferdaus Anam Jibon, Abu Bakar Rakib",
    "authorList": [
      "Abrar Rakin",
      "Obaidul Haque",
      "Md Istiak Ahamed",
      "Dr. Md. Ashraful Islam",
      "Ferdaus Anam Jibon",
      "Abu Bakar Rakib"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating GAD-Net. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core GAD-Net computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "545",
    "bibtex": "@inproceedings{rakin2026gad-net-,\n  title={GAD-Net: An Interpretable Deep Learning Framework for Automated Diabetic Retinopathy Screening in Smart Healthcare},\n  author={Abrar Rakin and Obaidul Haque and Md Istiak Ahamed and Dr. Md. Ashraful Islam and Ferdaus Anam Jibon and Abu Bakar Rakib},\n  booktitle={IEEE RAAICON},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abrar Rakin, Obaidul Haque, Md Istiak Ahamed, Dr. Md. Ashraful Islam, Ferdaus Anam Jibon, Abu Bakar Rakib (2026). GAD-Net: An Interpretable Deep Learning Framework for Automated Diabetic Retinopathy Screening in Smart Healthcare. IEEE RAAICON.",
    "ieee": "Abrar Rakin, Obaidul Haque, Md Istiak Ahamed, Dr. Md. Ashraful Islam, Ferdaus Anam Jibon, Abu Bakar Rakib, \"GAD-Net: An Interpretable Deep Learning Framework for Automated Diabetic Retinopathy Screening in Smart Healthcare,\" in IEEE RAAICON, 2026."
  },
  {
    "id": "adaptive-multimodal-fusion-of-chest-x-ray-ima-2026-39",
    "title": "Adaptive Multimodal Fusion of Chest X-ray Images and Structured Radiology Reports for Pneumonia Classification",
    "type": "Conference",
    "venue": "IEEE BECITHCON",
    "location": "IUBAT, Dhaka",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Ferdaus Anam Jibon, Mariha Tabassum, Esrat Nourin, Dr. Md. Ashraful Islam",
    "authorList": [
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Mariha Tabassum",
      "Esrat Nourin",
      "Dr. Md. Ashraful Islam"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating Adaptive Multimodal Fusion of Chest X-ray Images and Structured Radiology Reports for Pneumonia Classification. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Adaptive Multimodal Fusion of Chest X-ray Images and Structured Radiology Reports for Pneumonia Classification computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "X-Ray Analysis",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Low-Dose CT",
      "X-Ray Analysis",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "620",
    "bibtex": "@inproceedings{haque2026adaptive,\n  title={Adaptive Multimodal Fusion of Chest X-ray Images and Structured Radiology Reports for Pneumonia Classification},\n  author={Obaidul Haque and Ferdaus Anam Jibon and Mariha Tabassum and Esrat Nourin and Dr. Md. Ashraful Islam},\n  booktitle={IEEE BECITHCON},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Ferdaus Anam Jibon, Mariha Tabassum, Esrat Nourin, Dr. Md. Ashraful Islam (2026). Adaptive Multimodal Fusion of Chest X-ray Images and Structured Radiology Reports for Pneumonia Classification. IEEE BECITHCON.",
    "ieee": "Obaidul Haque, Ferdaus Anam Jibon, Mariha Tabassum, Esrat Nourin, Dr. Md. Ashraful Islam, \"Adaptive Multimodal Fusion of Chest X-ray Images and Structured Radiology Reports for Pneumonia Classification,\" in IEEE BECITHCON, 2026."
  },
  {
    "id": "a-morphology-aware-hybrid-framework-for-cervi-2026-40",
    "title": "A Morphology-Aware Hybrid Framework for Cervical Cell Classification",
    "type": "Conference",
    "venue": "IEEE BECITHCON",
    "location": "IUBAT, Dhaka",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Sonia Afroz, Afsana Akter Lija",
    "authorList": [
      "Obaidul Haque",
      "Kazi Lamia Sinja Sunjida",
      "Ferdaus Anam Jibon",
      "Sonia Afroz",
      "Afsana Akter Lija"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating A Morphology-Aware Hybrid Framework for Cervical Cell Classification. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core A Morphology-Aware Hybrid Framework for Cervical Cell Classification computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Cellular Diagnostics",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Cellular Diagnostics",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "622",
    "bibtex": "@inproceedings{haque2026a-morpho,\n  title={A Morphology-Aware Hybrid Framework for Cervical Cell Classification},\n  author={Obaidul Haque and Kazi Lamia Sinja Sunjida and Ferdaus Anam Jibon and Sonia Afroz and Afsana Akter Lija},\n  booktitle={IEEE BECITHCON},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Sonia Afroz, Afsana Akter Lija (2026). A Morphology-Aware Hybrid Framework for Cervical Cell Classification. IEEE BECITHCON.",
    "ieee": "Obaidul Haque, Kazi Lamia Sinja Sunjida, Ferdaus Anam Jibon, Sonia Afroz, Afsana Akter Lija, \"A Morphology-Aware Hybrid Framework for Cervical Cell Classification,\" in IEEE BECITHCON, 2026."
  },
  {
    "id": "attention-enhanced-efficientnet-b3-for-automa-2026-41",
    "title": "Attention-Enhanced EfficientNet-B3 for Automated Tuberculosis Screening Using Chest Radiographs",
    "type": "Conference",
    "venue": "IEEE BECITHCON",
    "location": "IUBAT, Dhaka",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Abrar Rakin, Anay Kumer Ghosh, Abu Bakar Rakib, Snaholata Mondal",
    "authorList": [
      "Obaidul Haque",
      "Abrar Rakin",
      "Anay Kumer Ghosh",
      "Abu Bakar Rakib",
      "Snaholata Mondal"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating Attention-Enhanced EfficientNet-B3 for Automated Tuberculosis Screening Using Chest Radiographs. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Attention-Enhanced EfficientNet-B3 for Automated Tuberculosis Screening Using Chest Radiographs computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "633",
    "bibtex": "@inproceedings{haque2026attentio,\n  title={Attention-Enhanced EfficientNet-B3 for Automated Tuberculosis Screening Using Chest Radiographs},\n  author={Obaidul Haque and Abrar Rakin and Anay Kumer Ghosh and Abu Bakar Rakib and Snaholata Mondal},\n  booktitle={IEEE BECITHCON},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Abrar Rakin, Anay Kumer Ghosh, Abu Bakar Rakib, Snaholata Mondal (2026). Attention-Enhanced EfficientNet-B3 for Automated Tuberculosis Screening Using Chest Radiographs. IEEE BECITHCON.",
    "ieee": "Obaidul Haque, Abrar Rakin, Anay Kumer Ghosh, Abu Bakar Rakib, Snaholata Mondal, \"Attention-Enhanced EfficientNet-B3 for Automated Tuberculosis Screening Using Chest Radiographs,\" in IEEE BECITHCON, 2026."
  },
  {
    "id": "an-interpretable-dual-lead-cnn-transformer-hy-2026-42",
    "title": "An Interpretable Dual-Lead CNN-Transformer Hybrid Framework for ECG Arrhythmia Classification with Gradient-Based Explainability",
    "type": "Conference",
    "venue": "IEEE SPICSCON",
    "location": "BAUET, Natore",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Md. Abdur Rahim, Rafat Ara, Mariha Tabassum",
    "authorList": [
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Abu Bakar Rakib",
      "Md. Abdur Rahim",
      "Rafat Ara",
      "Mariha Tabassum"
    ],
    "category": "Biomedical Signal Processing",
    "impactBadge": "IEEE C",
    "abstract": "Presents an end-to-end deep learning framework for An Interpretable Dual-Lead CNN-Transformer Hybrid Framework for ECG Arrhythmia Classification with Gradient-Based Explainability. Integrates advanced temporal feature extraction and frequency-domain decomposition to capture subtle physiological transitions across multi-channel recording setups with rigorous cross-validation.",
    "contributions": [
      "Designed and formulated the core An Interpretable Dual-Lead CNN-Transformer Hybrid Framework for ECG Arrhythmia Classification with Gradient-Based Explainability computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "ECG Arrhythmia",
      "Transformers",
      "Biomedical Signals",
      "Neural Decoding",
      "Physiological AI"
    ],
    "tags": [
      "ECG Arrhythmia",
      "Transformers",
      "Biomedical Signals",
      "Neural Decoding",
      "Physiological AI"
    ],
    "url": null,
    "doi": null,
    "pid": "404",
    "bibtex": "@inproceedings{haque2026an-inter,\n  title={An Interpretable Dual-Lead CNN-Transformer Hybrid Framework for ECG Arrhythmia Classification with Gradient-Based Explainability},\n  author={Obaidul Haque and Ferdaus Anam Jibon and Abu Bakar Rakib and Md. Abdur Rahim and Rafat Ara and Mariha Tabassum},\n  booktitle={IEEE SPICSCON},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Md. Abdur Rahim, Rafat Ara, Mariha Tabassum (2026). An Interpretable Dual-Lead CNN-Transformer Hybrid Framework for ECG Arrhythmia Classification with Gradient-Based Explainability. IEEE SPICSCON.",
    "ieee": "Obaidul Haque, Ferdaus Anam Jibon, Abu Bakar Rakib, Md. Abdur Rahim, Rafat Ara, Mariha Tabassum, \"An Interpretable Dual-Lead CNN-Transformer Hybrid Framework for ECG Arrhythmia Classification with Gradient-Based Explainability,\" in IEEE SPICSCON, 2026."
  },
  {
    "id": "a-region-aware-adaptive-ecg-enhancement-frame-2026-43",
    "title": "A Region-aware Adaptive ECG Enhancement Framework for Robust Morphology-preserving Signal Reconstruction",
    "type": "Conference",
    "venue": "IEEE SPICSCON",
    "location": "BAUET, Natore",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "presented",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Mariha Tabassum, Obaidul Haque, Ferdaus Anam Jibon, Md. Abdur Rahim",
    "authorList": [
      "Mariha Tabassum",
      "Obaidul Haque",
      "Ferdaus Anam Jibon",
      "Md. Abdur Rahim"
    ],
    "category": "Biomedical Signal Processing",
    "impactBadge": "IEEE C",
    "abstract": "Presents an end-to-end deep learning framework for A Region-aware Adaptive ECG Enhancement Framework for Robust Morphology-preserving Signal Reconstruction. Integrates advanced temporal feature extraction and frequency-domain decomposition to capture subtle physiological transitions across multi-channel recording setups with rigorous cross-validation.",
    "contributions": [
      "Designed and formulated the core A Region-aware Adaptive ECG Enhancement Framework for Robust Morphology-preserving Signal Reconstruction computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "ECG Arrhythmia",
      "Low-Dose CT",
      "Biomedical Signals",
      "Neural Decoding",
      "Physiological AI"
    ],
    "tags": [
      "ECG Arrhythmia",
      "Low-Dose CT",
      "Biomedical Signals",
      "Neural Decoding",
      "Physiological AI"
    ],
    "url": null,
    "doi": null,
    "pid": "409",
    "bibtex": "@inproceedings{tabassum2026a-region,\n  title={A Region-aware Adaptive ECG Enhancement Framework for Robust Morphology-preserving Signal Reconstruction},\n  author={Mariha Tabassum and Obaidul Haque and Ferdaus Anam Jibon and Md. Abdur Rahim},\n  booktitle={IEEE SPICSCON},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Mariha Tabassum, Obaidul Haque, Ferdaus Anam Jibon, Md. Abdur Rahim (2026). A Region-aware Adaptive ECG Enhancement Framework for Robust Morphology-preserving Signal Reconstruction. IEEE SPICSCON.",
    "ieee": "Mariha Tabassum, Obaidul Haque, Ferdaus Anam Jibon, Md. Abdur Rahim, \"A Region-aware Adaptive ECG Enhancement Framework for Robust Morphology-preserving Signal Reconstruction,\" in IEEE SPICSCON, 2026."
  },
  {
    "id": "explainable-stacking-machine-learning-ensembl-2026-44",
    "title": "Explainable Stacking Machine Learning Ensemble Model for Liver Disease Prediction",
    "type": "Conference",
    "venue": "IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE)",
    "location": "RUET, Rajshahi",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "published",
    "year": 2026,
    "authorPosition": "1st Author",
    "authors": "Obaidul Haque, Md. Samiul Alom, Ferdaus Anam Jibon, Saikat Kumar Gain, Md. Mahbub Alam, Md Abdul Ahad Linkon",
    "authorList": [
      "Obaidul Haque",
      "Md. Samiul Alom",
      "Ferdaus Anam Jibon",
      "Saikat Kumar Gain",
      "Md. Mahbub Alam",
      "Md Abdul Ahad Linkon"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating Explainable Stacking Machine Learning Ensemble Model for Liver Disease Prediction. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Explainable Stacking Machine Learning Ensemble Model for Liver Disease Prediction computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Ensemble Stacking",
      "Explainable AI (XAI)"
    ],
    "tags": [
      "Low-Dose CT",
      "Ensemble Stacking",
      "Explainable AI (XAI)"
    ],
    "url": null,
    "doi": null,
    "pid": "344",
    "bibtex": "@inproceedings{haque2026explaina,\n  title={Explainable Stacking Machine Learning Ensemble Model for Liver Disease Prediction},\n  author={Obaidul Haque and Md. Samiul Alom and Ferdaus Anam Jibon and Saikat Kumar Gain and Md. Mahbub Alam and Md Abdul Ahad Linkon},\n  booktitle={IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Obaidul Haque, Md. Samiul Alom, Ferdaus Anam Jibon, Saikat Kumar Gain, Md. Mahbub Alam, Md Abdul Ahad Linkon (2026). Explainable Stacking Machine Learning Ensemble Model for Liver Disease Prediction. IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE).",
    "ieee": "Obaidul Haque, Md. Samiul Alom, Ferdaus Anam Jibon, Saikat Kumar Gain, Md. Mahbub Alam, Md Abdul Ahad Linkon, \"Explainable Stacking Machine Learning Ensemble Model for Liver Disease Prediction,\" in IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE), 2026."
  },
  {
    "id": "sentiment-analysis-of-youtube-comments-on-the-2026-45",
    "title": "Sentiment Analysis of YouTube Comments on the Russia–Ukraine Conflict: A Comparative Study of Machine Learning and Transformer-Based Approaches",
    "type": "Conference",
    "venue": "IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE)",
    "location": "RUET, Rajshahi",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "published",
    "year": 2026,
    "authorPosition": "3rd Author",
    "authors": "Abu Bakar Rakib, Md. Mahbub Alam, Obaidul Haque, Snaholata Mondal",
    "authorList": [
      "Abu Bakar Rakib",
      "Md. Mahbub Alam",
      "Obaidul Haque",
      "Snaholata Mondal"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating Sentiment Analysis of YouTube Comments on the Russia–Ukraine Conflict. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core Sentiment Analysis of YouTube Comments on the Russia–Ukraine Conflict computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Transformers",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "tags": [
      "Low-Dose CT",
      "Transformers",
      "Medical Imaging",
      "Deep Learning",
      "PyTorch"
    ],
    "url": null,
    "doi": null,
    "pid": "939",
    "bibtex": "@inproceedings{rakib2026sentimen,\n  title={Sentiment Analysis of YouTube Comments on the Russia–Ukraine Conflict: A Comparative Study of Machine Learning and Transformer-Based Approaches},\n  author={Abu Bakar Rakib and Md. Mahbub Alam and Obaidul Haque and Snaholata Mondal},\n  booktitle={IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Md. Mahbub Alam, Obaidul Haque, Snaholata Mondal (2026). Sentiment Analysis of YouTube Comments on the Russia–Ukraine Conflict: A Comparative Study of Machine Learning and Transformer-Based Approaches. IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE).",
    "ieee": "Abu Bakar Rakib, Md. Mahbub Alam, Obaidul Haque, Snaholata Mondal, \"Sentiment Analysis of YouTube Comments on the Russia–Ukraine Conflict: A Comparative Study of Machine Learning and Transformer-Based Approaches,\" in IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE), 2026."
  },
  {
    "id": "bangla-semantic-analysis-using-transformer-ba-2026-46",
    "title": "Bangla Semantic analysis using Transformer-Based BanglaBERT model",
    "type": "Conference",
    "venue": "IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE)",
    "location": "RUET, Rajshahi",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "published",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Saikat Kumar Gain, Obaidul Haque, Rifat Hossain, A.S.M. Shakil Ahamed",
    "authorList": [
      "Saikat Kumar Gain",
      "Obaidul Haque",
      "Rifat Hossain",
      "A.S.M. Shakil Ahamed"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE C",
    "abstract": "Addresses low-resource linguistic challenges through Bangla Semantic analysis using Transformer-Based BanglaBERT model. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core Bangla Semantic analysis using Transformer-Based BanglaBERT model computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Transformers",
      "Bengali NLP",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "tags": [
      "Transformers",
      "Bengali NLP",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "url": null,
    "doi": null,
    "pid": "996",
    "bibtex": "@inproceedings{gain2026bangla-s,\n  title={Bangla Semantic analysis using Transformer-Based BanglaBERT model},\n  author={Saikat Kumar Gain and Obaidul Haque and Rifat Hossain and A.S.M. Shakil Ahamed},\n  booktitle={IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE)},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Saikat Kumar Gain, Obaidul Haque, Rifat Hossain, A.S.M. Shakil Ahamed (2026). Bangla Semantic analysis using Transformer-Based BanglaBERT model. IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE).",
    "ieee": "Saikat Kumar Gain, Obaidul Haque, Rifat Hossain, A.S.M. Shakil Ahamed, \"Bangla Semantic analysis using Transformer-Based BanglaBERT model,\" in IEEE International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE), 2026."
  },
  {
    "id": "a-hybrid-stacking-based-framework-for-multicl-2026-47",
    "title": "A Hybrid Stacking-Based Framework for Multiclass Road Accident Severity Prediction with Interpretable SHAP Analysis",
    "type": "Conference",
    "venue": "IEEE QPAIN",
    "location": "CUET, Chittagong",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "published",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Maksuda Akter, Obaidul Haque, Mariha Tabassum, Rajib Khan",
    "authorList": [
      "Maksuda Akter",
      "Obaidul Haque",
      "Mariha Tabassum",
      "Rajib Khan"
    ],
    "category": "Computer Vision & Medical Imaging",
    "impactBadge": "IEEE C",
    "abstract": "A comprehensive empirical and clinical investigation formulating A Hybrid Stacking-Based Framework for Multiclass Road Accident Severity Prediction with Interpretable SHAP Analysis. Benchmarks advanced neural architectures and ensemble models across multi-cohort clinical datasets, isolating salient biomarkers with post-hoc interpretability.",
    "contributions": [
      "Designed and formulated the core A Hybrid Stacking-Based Framework for Multiclass Road Accident Severity Prediction with Interpretable SHAP Analysis computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Ensemble Stacking",
      "Explainable AI (XAI)"
    ],
    "tags": [
      "Low-Dose CT",
      "Ensemble Stacking",
      "Explainable AI (XAI)"
    ],
    "url": null,
    "doi": null,
    "pid": "4648",
    "bibtex": "@inproceedings{akter2026a-hybrid,\n  title={A Hybrid Stacking-Based Framework for Multiclass Road Accident Severity Prediction with Interpretable SHAP Analysis},\n  author={Maksuda Akter and Obaidul Haque and Mariha Tabassum and Rajib Khan},\n  booktitle={IEEE QPAIN},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Maksuda Akter, Obaidul Haque, Mariha Tabassum, Rajib Khan (2026). A Hybrid Stacking-Based Framework for Multiclass Road Accident Severity Prediction with Interpretable SHAP Analysis. IEEE QPAIN.",
    "ieee": "Maksuda Akter, Obaidul Haque, Mariha Tabassum, Rajib Khan, \"A Hybrid Stacking-Based Framework for Multiclass Road Accident Severity Prediction with Interpretable SHAP Analysis,\" in IEEE QPAIN, 2026."
  },
  {
    "id": "aspect-based-sentiment-analysis-of-bangladesh-2026-48",
    "title": "Aspect-Based Sentiment Analysis of Bangladeshi IT Service Reviews Using Transformer Architectures and Post-Hoc interpretability",
    "type": "Conference",
    "venue": "IEEE QPAIN",
    "location": "CUET, Chittagong",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "published",
    "year": 2026,
    "authorPosition": "3rd Author",
    "authors": "Rajib Khan, Abu Bakar Rakib, Obaidul Haque, Mariha Tabassum, Md Saidur Rahman, Maksuda Akter",
    "authorList": [
      "Rajib Khan",
      "Abu Bakar Rakib",
      "Obaidul Haque",
      "Mariha Tabassum",
      "Md Saidur Rahman",
      "Maksuda Akter"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE C",
    "abstract": "Addresses low-resource linguistic challenges through Aspect-Based Sentiment Analysis of Bangladeshi IT Service Reviews Using Transformer Architectures and Post-Hoc interpretability. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core Aspect-Based Sentiment Analysis of Bangladeshi IT Service Reviews Using Transformer Architectures and Post-Hoc interpretability computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Transformers",
      "Bengali NLP"
    ],
    "tags": [
      "Low-Dose CT",
      "Transformers",
      "Bengali NLP"
    ],
    "url": null,
    "doi": null,
    "pid": "4696",
    "bibtex": "@inproceedings{khan2026aspect-b,\n  title={Aspect-Based Sentiment Analysis of Bangladeshi IT Service Reviews Using Transformer Architectures and Post-Hoc interpretability},\n  author={Rajib Khan and Abu Bakar Rakib and Obaidul Haque and Mariha Tabassum and Md Saidur Rahman and Maksuda Akter},\n  booktitle={IEEE QPAIN},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Rajib Khan, Abu Bakar Rakib, Obaidul Haque, Mariha Tabassum, Md Saidur Rahman, Maksuda Akter (2026). Aspect-Based Sentiment Analysis of Bangladeshi IT Service Reviews Using Transformer Architectures and Post-Hoc interpretability. IEEE QPAIN.",
    "ieee": "Rajib Khan, Abu Bakar Rakib, Obaidul Haque, Mariha Tabassum, Md Saidur Rahman, Maksuda Akter, \"Aspect-Based Sentiment Analysis of Bangladeshi IT Service Reviews Using Transformer Architectures and Post-Hoc interpretability,\" in IEEE QPAIN, 2026."
  },
  {
    "id": "emotion-aware-token-reweighting-for-aspect-ba-2026-49",
    "title": "Emotion-Aware Token Reweighting for Aspect-Based Emotion Detection in Bangla Text",
    "type": "Conference",
    "venue": "IEEE QPAIN",
    "location": "CUET, Chittagong",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "published",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Mariha Tabassum, Obaidul Haque, Rajib Khan, Md Saidur Rahman, Maksuda Akter",
    "authorList": [
      "Mariha Tabassum",
      "Obaidul Haque",
      "Rajib Khan",
      "Md Saidur Rahman",
      "Maksuda Akter"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE C",
    "abstract": "Addresses low-resource linguistic challenges through Emotion-Aware Token Reweighting for Aspect-Based Emotion Detection in Bangla Text. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core Emotion-Aware Token Reweighting for Aspect-Based Emotion Detection in Bangla Text computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Bengali NLP",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "tags": [
      "Low-Dose CT",
      "Bengali NLP",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "url": null,
    "doi": null,
    "pid": "4671",
    "bibtex": "@inproceedings{tabassum2026emotion-,\n  title={Emotion-Aware Token Reweighting for Aspect-Based Emotion Detection in Bangla Text},\n  author={Mariha Tabassum and Obaidul Haque and Rajib Khan and Md Saidur Rahman and Maksuda Akter},\n  booktitle={IEEE QPAIN},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Mariha Tabassum, Obaidul Haque, Rajib Khan, Md Saidur Rahman, Maksuda Akter (2026). Emotion-Aware Token Reweighting for Aspect-Based Emotion Detection in Bangla Text. IEEE QPAIN.",
    "ieee": "Mariha Tabassum, Obaidul Haque, Rajib Khan, Md Saidur Rahman, Maksuda Akter, \"Emotion-Aware Token Reweighting for Aspect-Based Emotion Detection in Bangla Text,\" in IEEE QPAIN, 2026."
  },
  {
    "id": "transformer-based-sentence-reconstruction-fro-2026-50",
    "title": "Transformer-Based Sentence Reconstruction from Jumbled Words: A Comparative Evaluation Against Sequence Models",
    "type": "Conference",
    "venue": "IEEE QPAIN",
    "location": "CUET, Chittagong",
    "publisher": "IEEE",
    "level": "C",
    "qIf": null,
    "status": "published",
    "year": 2026,
    "authorPosition": "2nd Author",
    "authors": "Abu Bakar Rakib, Obaidul Haque, Md. Samiul Alom, Md Nazir Ahmed",
    "authorList": [
      "Abu Bakar Rakib",
      "Obaidul Haque",
      "Md. Samiul Alom",
      "Md Nazir Ahmed"
    ],
    "category": "NLP & Bengali AI",
    "impactBadge": "IEEE C",
    "abstract": "Addresses low-resource linguistic challenges through Transformer-Based Sentence Reconstruction from Jumbled Words. Utilizes specialized pre-trained transformer embeddings, contextual semantic representations, and interpretable attention weights evaluated on novel annotated corpora.",
    "contributions": [
      "Designed and formulated the core Transformer-Based Sentence Reconstruction from Jumbled Words computational architecture.",
      "Evaluated performance rigorously across benchmark datasets with comparative baseline validation.",
      "Demonstrated superior accuracy, domain robustness, and practical deployability."
    ],
    "keywords": [
      "Low-Dose CT",
      "Transformers",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "tags": [
      "Low-Dose CT",
      "Transformers",
      "Natural Language Processing",
      "Language Models",
      "Computational Linguistics"
    ],
    "url": null,
    "doi": null,
    "pid": "1220",
    "bibtex": "@inproceedings{rakib2026transfor,\n  title={Transformer-Based Sentence Reconstruction from Jumbled Words: A Comparative Evaluation Against Sequence Models},\n  author={Abu Bakar Rakib and Obaidul Haque and Md. Samiul Alom and Md Nazir Ahmed},\n  booktitle={IEEE QPAIN},\n  year={2026},\n  organization={IEEE}\n}",
    "apa": "Abu Bakar Rakib, Obaidul Haque, Md. Samiul Alom, Md Nazir Ahmed (2026). Transformer-Based Sentence Reconstruction from Jumbled Words: A Comparative Evaluation Against Sequence Models. IEEE QPAIN.",
    "ieee": "Abu Bakar Rakib, Obaidul Haque, Md. Samiul Alom, Md Nazir Ahmed, \"Transformer-Based Sentence Reconstruction from Jumbled Words: A Comparative Evaluation Against Sequence Models,\" in IEEE QPAIN, 2026."
  }
];

export const highlightedPapers: ResearchPublication[] = researchPublications;

export const publicationOverviewStats = {
  totalPapers: '50',
  firstAuthorCount: '24',
  publishedCount: '11',
  presentedCount: '14',
  underReviewCount: '17',
  venues: 'ACM, IEEE, Springer Nature, Elsevier',
};
