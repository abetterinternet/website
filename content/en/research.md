---
title: Research
---

Written with markdown

# Privacy Computing

Our team is fully committed to privacy computing, providing solutions to secure private and large-scale data. 

We work on various privacy computing techniques, including Federated Learning, Homomorphic Encryption, Secure Multi-party Computation, Secure Enclaves (i.e., trusted execution environments), Zero-knowledge Proofs, and Differential Privacy systems. Furthermore, to boost the performance and efficiency of the privacy computing systems, we utilize hardware devices for parallelized execution (e.g. GPUs, TPUs) and guaranteed security (e.g. trusted devices). 

We have built and are extending various industry-grade privacy computing systems, such as highly efficient privacy-preserving AI model training (including fine-tuning large models) over encrypted (or secret-shared) data. 

Our published and ongoing projects includes:

1. A fully functional **GPU-assisted Homomorphic Encryption library** supporting BFV, CKKS and BGV scheme, which parallelizes the essential polynomial ring arithmetic. Evaluation shows that under specific parameters, our implementation is one order of magnitude faster than the state-of-the-art CPU counterpart. The library supports the SIMD encoding methods in each scheme, both symmetric and asymmetric encryption, and provides all leveled HE operations including ciphertext addition, multiplication, relinearization, rotation and key switching utilities. Our implementation is open-sourced at [GitHub](https://github.com/lightbulb128/troy). We are actively conducting further improvements to integrate more fine-grained control over the GPU resources (e.g. using shared memory, thread synchronization) to the library.

2. A state-of-the-art **private inference system targeting large language models (LLMs)**. We use homomorphic encryption for privately evaluating linear layers (e.g. fully connected layers), and secure two party computation for non-linear layers (e.g. layer normalization and ReLU/GELU). This combination helps us achieve best time and communication efficiency. Moreover, we substantially reduce the inference costs by substituting the privacy-computing unfriendly functions in LLMs with other functions easy to evaluate, meanwhile maintaining the model accuracy by finetuning. These techniques allows build a practical private inference system for LLMs, completing one evaluation of a GPT-2 scale model within 8 minutes (5 times faster than the prior best). Our paper is available at [arXiv](https://arxiv.org/abs/2305.18396).

3. A novel **private and extensible collaborative neural network training system, denoted as Pencil**. Assuming a model owner wishes to train or finetune a model with private data from other entities (data owners), Pencil guarantees both the privacy of both training data and model weights, where Federated Learning fails to protect the model. Pencil also solves the non-colluding assumption problem, inherent with the secure multi-party computation. Pencil achieves its multi-party security by naturally extending a two-party training protocol, since in each training step only two parties are involved. Such a solution also improves extensibility, as introducing new data owners into the training would not increase training costs. Furthermore, we propose a new method of preprocessing to significantly reduce the computation costs and analyze its security theoretically and empirically. The experiments show that Pencil is able to train a CNN model from scratch with $2.9\times 10^4$ images per hour throughput on CIFAR10 and $8.1\times 10^4$ if using transfer learning, 10 times faster than prior art. Our paper is accepted by NDSS'24.