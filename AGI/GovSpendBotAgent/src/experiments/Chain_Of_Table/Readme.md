From: llama_hub/llama_packs/tables/chain_of_table/chain_of_table.ipynb
Github: https://github.com/run-llama/llama_index/tree/main/llama-index-packs/llama-index-packs-tables

The original implementation uses 
```
llm = OpenAI(model="gpt-4-1106-preview")
```
It's model size expected to be around 170 billion.

Look for models' that has capability nearer to gpt-4-1106-preview to get good dynamic planning.

Requirments

!pip install llama-index-llms-openrouter
!pip install llama-index

from llama_index.core.llama_pack import download_llama_pack

# download and install dependencies
ChainOfTablePack = download_llama_pack("ChainOfTablePack", "./chain_of_table_pack")