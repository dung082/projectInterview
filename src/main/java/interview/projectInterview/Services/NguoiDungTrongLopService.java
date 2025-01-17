package interview.projectInterview.Services;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Models.NguoiDung;
import interview.projectInterview.Models.NguoiDungTrongLop;
import interview.projectInterview.Repository.LopRepository;
import interview.projectInterview.Repository.NguoiDungRepository;
import interview.projectInterview.Repository.NguoiDungTrongLopRepository;
import interview.projectInterview.Services.Interface.INguoiDungTrongLopService;
import interview.projectInterview.ViewDto.NguoiDungTrongLopViewDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NguoiDungTrongLopService implements INguoiDungTrongLopService {
    @Autowired
    private NguoiDungTrongLopRepository nguoiDungTrongLopRepository;
    @Autowired
    private NguoiDungRepository nguoiDungRepository;
    @Autowired
    private LopRepository lopRepository;

    public NguoiDungTrongLopService(NguoiDungTrongLopRepository nguoiDungTrongLopRepository, NguoiDungRepository nguoiDungRepository, LopRepository lopRepository) {
        this.nguoiDungTrongLopRepository = nguoiDungTrongLopRepository;
        this.nguoiDungRepository = nguoiDungRepository;
        this.lopRepository = lopRepository;
    }

    public NguoiDungTrongLopService() {
    }

    @Override
    public List<NguoiDungTrongLopViewDto> getAllNguoiDungTrongLop() {
        List<NguoiDungTrongLopViewDto> listNguoiDungTrongLopView = new ArrayList<NguoiDungTrongLopViewDto>();
        List<NguoiDungTrongLop> nguoiDungTrongLop = nguoiDungTrongLopRepository.findAll();
        if (!nguoiDungTrongLop.isEmpty()) {
            nguoiDungTrongLop.forEach(nguoiDungTrongLopView -> {
                NguoiDung nguoiDung = nguoiDungRepository.findById(nguoiDungTrongLopView.getNguoiDungId()).orElseThrow(null);
                Lop lop = lopRepository.findById(nguoiDungTrongLopView.getLopId()).orElseThrow(null);
                if (nguoiDung != null && lop != null) {
                    NguoiDungTrongLopViewDto nguoiDungTrongLopViewDto = new NguoiDungTrongLopViewDto();
                    nguoiDungTrongLopViewDto.id = nguoiDungTrongLopView.getId();
                    nguoiDungTrongLopViewDto.lopId = nguoiDungTrongLopView.getLopId();
                    nguoiDungTrongLopViewDto.nguoiDungId = nguoiDungTrongLopView.getNguoiDungId();
                    nguoiDungTrongLopViewDto.maLop = lop.getMaLop();
                    nguoiDungTrongLopViewDto.tenLop = lop.getTenLop();
                    nguoiDungTrongLopViewDto.hoTen = nguoiDung.getHoTen();
                    nguoiDungTrongLopViewDto.diaChi = nguoiDung.getDiaChi();
                    nguoiDungTrongLopViewDto.gioiTinh = nguoiDung.getGioiTinh();
                    nguoiDungTrongLopViewDto.role = nguoiDung.getRole();
                    nguoiDungTrongLopViewDto.ngaySinh = nguoiDung.getNgaySinh();

                    listNguoiDungTrongLopView.add(nguoiDungTrongLopViewDto);
                }
            });

        }
        return listNguoiDungTrongLopView;
    }

    @Override
    public NguoiDungTrongLop createNguoiDungTrongLop(NguoiDungTrongLop nguoiDungTrongLop) throws Exception {
        Lop lop = lopRepository.findById(nguoiDungTrongLop.getLopId()).orElseThrow(null);
        NguoiDung nguoiDung = nguoiDungRepository.findById(nguoiDungTrongLop.getNguoiDungId()).orElseThrow(null);

        List<NguoiDungTrongLop> nguoiDUngTrongLop = nguoiDungTrongLopRepository.findByNamHocAndNguoiDungId(nguoiDungTrongLop.getNguoiDungId(), nguoiDungTrongLop.getNamhoc());
        if (!nguoiDUngTrongLop.isEmpty()) {
            throw new Exception("Người dùng đã có lớp trong năm học");
        }
        if (lop == null) {
            throw new Exception("Lớp không tồn tại");
        } else {
            if (nguoiDung == null) {
                throw new Exception("Người dùng không tồn tại");
            } else {
                return nguoiDungTrongLopRepository.save(nguoiDungTrongLop);
            }
        }
    }

    @Override
    public List<NguoiDungTrongLopViewDto> getNguoiDungTrongLopByNamHoc(int namHoc, long lopId) {
        return nguoiDungTrongLopRepository.getNguoiDungTrongLopByNamHoc(namHoc, lopId);
    }

}
