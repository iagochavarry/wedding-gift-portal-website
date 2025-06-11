#!/bin/bash

echo "🔄 Iniciando renomeação de arquivos JPEG para qrcode.jpeg..."
echo ""

# Contador para estatísticas
renamed_count=0
already_correct=0
no_jpeg_found=0

# Percorre todas as pastas dentro de public/gifts/
for gift_dir in public/gifts/*/; do
    if [ -d "$gift_dir" ]; then
        gift_name=$(basename "$gift_dir")
        
        # Verifica se já tem qrcode.jpeg
        if [ -f "$gift_dir/qrcode.jpeg" ]; then
            # Procura por outros arquivos .jpeg além do qrcode.jpeg
            other_jpegs=$(find "$gift_dir" -maxdepth 1 -name "*.jpeg" -not -name "qrcode.jpeg" -type f)
            
            if [ -n "$other_jpegs" ]; then
                echo "📁 $gift_name:"
                echo "   ⚠️  Já tem qrcode.jpeg, removendo arquivos extras:"
                
                # Remove arquivos JPEG extras usando um loop while
                find "$gift_dir" -maxdepth 1 -name "*.jpeg" -not -name "qrcode.jpeg" -type f -print0 | while IFS= read -r -d '' file; do
                    echo "   🗑️  Removendo: $(basename "$file")"
                    rm "$file"
                done
                
                echo "   ✅ Limpeza concluída!"
                renamed_count=$((renamed_count + 1))
            else
                echo "📁 $gift_name: ✅ Já possui qrcode.jpeg"
                already_correct=$((already_correct + 1))
            fi
        else
            # Procura por arquivos .jpeg para renomear
            first_jpeg=$(find "$gift_dir" -maxdepth 1 -name "*.jpeg" -type f | head -1)
            
            if [ -n "$first_jpeg" ]; then
                echo "📁 $gift_name:"
                echo "   Renomeando: $(basename "$first_jpeg") → qrcode.jpeg"
                
                # Renomeia o primeiro arquivo encontrado
                mv "$first_jpeg" "$gift_dir/qrcode.jpeg"
                echo "   ✅ Arquivo renomeado!"
                
                # Remove outros arquivos JPEG se existirem
                find "$gift_dir" -maxdepth 1 -name "*.jpeg" -not -name "qrcode.jpeg" -type f -print0 | while IFS= read -r -d '' file; do
                    echo "   🗑️  Removendo arquivo extra: $(basename "$file")"
                    rm "$file"
                done
                
                renamed_count=$((renamed_count + 1))
            else
                echo "📁 $gift_name: ❌ Nenhum arquivo JPEG encontrado"
                no_jpeg_found=$((no_jpeg_found + 1))
            fi
        fi
        echo ""
    fi
done

echo "🎉 Processo concluído!"
echo ""
echo "📊 Estatísticas:"
echo "   Pastas processadas: $renamed_count"
echo "   Já estavam corretas: $already_correct"
echo "   Sem arquivos JPEG: $no_jpeg_found"
echo ""
echo "📄 Resumo final:"
total_qrcodes=$(find public/gifts -name "qrcode.jpeg" -type f | wc -l)
echo "   Total de arquivos qrcode.jpeg: $total_qrcodes" 